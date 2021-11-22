const cors = require('cors');
const express = require('express');
const fetch = require('node-fetch');

// Port definition
const PORT = 3001;
const url = 'https://newsapi.org/v2/top-headlines?country=mx&category=health&apiKey=fc55a7ea4bed4d238b54cc787e005125';

const app = express();
app.use(cors());
/* const myHeaders = new Headers();

const myRequest = new Request('flowers.jpg', {
    method: 'GET',
    headers: myHeaders,
    mode: 'cors',
    cache: 'default',
});

fetch(myRequest)
    .then(response => response.blob())
    .then(myBlob => {
        myImage.src = URL.createObjectURL(myBlob);
    });
 */
app.get('/getnews', async function(req, res) {

    let data;

    await fetch(url)
        .then(res => res.json())
        .then(articles => data = articles.articles)
        .then(() => console.log("Console Log 1"+ data));

    console.log(data);
    res.send(data);
});

app.listen(PORT, () => {
    console.log(`Server listening on http://localhost:${PORT}`);
})