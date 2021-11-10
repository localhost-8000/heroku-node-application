const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.send("hello guys");
})

app.get("/channel", (req, res) => {
    res.sendFile(__dirname + "/public/index.html");
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is started at port ${PORT}`);
})