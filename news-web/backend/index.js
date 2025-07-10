const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.get("/", (req, res) => {
    res.status(200).json({
        "message": "This is a message"
    })
})

app.get("/rss/*path", async (req, res) => {
    if (!req.params.path || !req.params.path.length === 0) {
        res.status(404);
    }

    const response = await fetch("https://timesofindia.indiatimes.com/" + req.params.path.join("/"));
    const text = await response.text();
    res.set('Content-Type', 'application/rss+xml');
    return res.send(text);
})

app.listen(3001, () => {
    console.log("App started on port 3001");
})