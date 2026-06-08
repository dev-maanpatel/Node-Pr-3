
const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
    res.render("pages/home", { title: "TransitFlow | Home" });
});

app.get("/about", (req, res) => {
    res.render("pages/about", { title: "TransitFlow | About" });
});

app.get("/services", (req, res) => {
    res.render("pages/services", { title: "TransitFlow | Services" });
});

app.get("/project", (req, res) => {
    res.render("pages/project", { title: "TransitFlow | Project" });
});

app.get("/contact", (req, res) => {
    res.render("pages/contact", { title: "TransitFlow | Contact" });
});

app.post("/contact", (req, res) => {
    res.redirect("/contact");
});

app.use((req, res) => {
    res.status(404).render("pages/not-found", { title: "TransitFlow | 404" });
});

app.listen(PORT, () => {
    console.log(`TransitFlow server running at http://localhost:${PORT}`);
});
