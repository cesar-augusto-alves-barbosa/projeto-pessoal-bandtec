const express = require('express');
const app = express();

app.use(express.static("public"));

app.get("/", (req, res) => {
    return res.sendFile(__dirname + "/pages/Home/")
});
app.get("/login", (req, res) => {
    return res.sendFile(__dirname + "/pages/Login/")
});
app.get("/register", (req, res) => {
    return res.sendFile(__dirname + "/pages/Register/")
});
app.get("/sobre", (req, res) => {
    return res.sendFile(__dirname + "/pages/Sobre/")
});
app.listen(3500);