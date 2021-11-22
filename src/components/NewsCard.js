import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function NewsCard(params) {
    
    return (
        <Box sx={{ display: 'flex',  flexWrap: 'wrap', justifyContent: 'center'}}>
            {params.map(entry => (
            <Card  key={entry.title} sx={{ maxWidth: 345 }}>
                <CardMedia
                    image={entry.urlToImage}

                />
                
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {entry.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {entry.description}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small" href={entry.url} target='_blank'>Go to site</Button>
                </CardActions>
            </Card>
        ))}
        </Box>
    )
}
