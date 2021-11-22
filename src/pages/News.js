import axios from 'axios';
import React, { useEffect, useState } from "react";
import {
    Container,
    Divider,
    Card,
    CardContent,
    Typography,
    Box,
    FormControl,
    Select,
    MenuItem,
    InputLabel,
} from "@mui/material";
import { Link } from 'react-router-dom';


// Custom Components
import getFirebase from "../firebase/configFirebase";

//Components
import Navbar from "../components/Navbar";
import NewsCard from "../components/NewsCard";

export default function News(params) {
    const firebase = getFirebase();
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        const latestNews = async() => {
            try {
                const res = await axios.get('http://localhost:3001/getnews');
                await setArticles(res.data);
                console.log(articles);
            } catch (error) {
                console.error(error);
            }
        };
        latestNews();
    }, [])

    return (
        <>
            <div>
                <Navbar userData={params.userData} />
                <Container>
                    <Typography variant='h4' component='div' style={{
                        textAlign: 'center',
                    }}>News</Typography>
                </Container>
            </div>
            <NewsCard />
        </>
    )
}