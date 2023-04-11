const express = require("express");
const app = express();
const port = 3000;

app.use("/files", express.static("website/files"));

app.get("/", (req, res) => {
  res.redirect("/home");
});

app.get("/home", (req, res) => {
  res.sendFile("/website/index.html", { root: __dirname });
});

app.get("/portfolio", (req, res) => {
  res.sendFile("/website/portfolio.html", { root: __dirname });
});

app.get("/links", (req, res) => {
  res.sendFile("/website/links.html", { root: __dirname });
});

app.get("/resume", (req, res) => {
  res.sendFile("/website/resume.html", { root: __dirname });
});

app.get("/blog", (req, res) => {
  res.sendFile("/website/blog.html", { root: __dirname });
});

app.get("/resume-download", (req, res) => {
  res.sendFile("/website/Resume_Ruipeng.pdf", { root: __dirname });
});

// start the server listening for requests
app.listen(process.env.PORT || port, () =>
  console.log(
    `Ruipeng's web server is running on port ${process.env.PORT || port}...`
  )
);
