import axios from 'axios';
import React, { useEffect, useState } from "react";
import {
    Container,
    Box,
} from "@mui/material";
import { Link } from 'react-router-dom';


// Custom Components
import getFirebase from "../firebase/configFirebase";

//Components
import Navbar from "../components/Navbar";
import NewsCard from "../components/NewsCard";

export default function News(params) {
    const firebase = getFirebase();
    const [news, setNews] = useState([])

    const newsURL = 'https://mexico-health-news.herokuapp.com/getnews';

    const getRecentNews = () => {
        axios.get(newsURL)
            .then((res) => {
                const allNews = res.data;
                // console.log(allNews);
                setNews(allNews);
                console.log(news);
            })
            .catch(error => console.error(`ErrorL ${error}`));
    }

    useEffect(() => {
        getRecentNews();
    }, []);

    return (
        <>
            <div>
                <Navbar userData={params.userData} />
                <Container>
                    <h1>News</h1>
                </Container>
            </div>
            <Container container
                spacing={2}
                direction="row"
                justify="flex-start"
                alignItems="center"
            >
                {news.map(a =>
                    <NewsCard imageURL={a.urlToImage} title={a.title} author={a.author} url={a.url} />
                )}
            </Container>
        </>
    )
}