const express = require("express");
const fs = require("fs");
const http = require("http");
const HLSServer = require("hls-server");
const httpAttach = require("http-attach");

const port = 3000;
const app = express();

const server = http.createServer(app);

app.use(express.static("public"));
app.use("/files", express.static("website/files"));

app.get("/", (req, res) => {
  res.redirect("/home");
});

app.get("/home", (req, res) => {
  res.sendFile("/website/index.html", { root: __dirname });
});

app.get("/portfolio/otherProjects", (req, res) => {
  res.sendFile("/website/otherProjects.html", { root: __dirname });
});

app.get("/portfolio/threeJS", (req, res) => {
  res.sendFile("/website/threeJS.html", { root: __dirname });
});

app.get("/portfolio/echarts", (req, res) => {
  res.sendFile("/website/echarts.html", { root: __dirname });
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

new HLSServer(server, {
  provider: {
    exists: (req, callback) => {
      const reqUri = req.url.split("/").pop();
      const reqExt = reqUri.split(".").pop();
      // console.log(reqExt);
      if (reqExt === "m3u8" || reqExt === "ts") {
        fs.access(
          `${__dirname}/hlsVideos/${reqUri}`,
          fs.constants.F_OK,
          function (err) {
            if (err) {
              console.log("File not exist");
              return callback(null, false);
            }
          }
        );
      }
      callback(null, true);
    },
    getManifestStream: (req, callback) => {
      // console.log("m3u8");
      const reqUri = req.url.split("/").pop();
      const stream = fs.createReadStream(`${__dirname}/hlsVideos/${reqUri}`);
      callback(null, stream);
    },
    getSegmentStream: (req, callback) => {
      const stream = fs.createReadStream(
        `${__dirname}/hlsVideos/${req.url.split("/").pop()}`
      );
      callback(null, stream);
    },
  },
});

function addCors(req, res, next) {
  if (req.method === "OPTIONS") {
    res.writeHead(200);
    res.end();
    return;
  }
  const reqExt = req.url.split("/").pop().split(".").pop();
  if (reqExt !== "m3u8" && reqExt !== "ts") {
    next();
  } else {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "OPTIONS, GET");
    next();
  }
}

httpAttach(server, addCors);
// start the server listening for requests
server.listen(process.env.PORT || port, () =>
  console.log(
    `Ruipeng's web server is running on port ${process.env.PORT || port}...`
  )
);
