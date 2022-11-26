const express = require("express");
const app = express();

app.set("view engine", "ejs")

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const port = 5000;

const plNames = [];

app.get("/", (req, res) => {
    res.render("index", { plNames })
})
app.post("/", (req, res) => {
    plNames.push(req.body.plName);
    res.redirect("/");
})

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
})