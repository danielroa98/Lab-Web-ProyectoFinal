import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

export default function NewsCard(props) {


    return (
        <Card key={props.title} sx={{ maxWidth: 345 }}>
            <CardMedia
                alt={props.title}
                image={props.imageURL}
                component="img"
                height="140"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {props.title}
                </Typography>
                <Typography variant="h6" component="div">
                    {props.author ? (
                        <Typography>Author: {props.author}</Typography>
                    ) : (
                        <Typography>Anonymous</Typography>
                    )}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {props.description}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small" href={props.url} target='_blank'>Go to site</Button>
            </CardActions>
        </Card>
    )
}
