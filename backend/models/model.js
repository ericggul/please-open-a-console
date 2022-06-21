const express = require("express");
const cors = require("cors");
const path = require("path");
const http = require("http");
const { Server } = require("socket.io");

class Model {
  constructor() {
    this.app = express();
    this.server = http.createServer(this.app);
    this.io = new Server(this.server, {
      cors: {
        origin: "http://localhost:3000",
      },
    });
    this.port = process.env.PORT || 8000;
    this.paths = {
      tts: "/tts",
      openai: "/openai",
    };
    this.middlewares();
    this.routes();
    this.connection();
  }

  middlewares() {
    this.app.use(cors());
    this.app.use(express.json());
    this.app.use(express.static(path.join(__dirname, "../../client/build")));
  }

  routes() {
    this.app.use(this.paths.tts, require("../routes/tts"));
    this.app.use(this.paths.openai, require("../routes/openai"));
    this.app.get("*", (req, res) => {
      res.sendFile(path.join(__dirname, "../../client/build/index.html"));
    });
  }

  connection() {
    this.io.on("connection", (socket) => {
      console.log("a user connected");
      socket.on("disconnect", () => {
        console.log("user disconnected");
      });
      socket.on("input send", (msg) => {
        console.log("chat", msg);
      });
      socket.on("simple input", (msg) => {
        this.io.emit("input", msg);
      });
    });
  }

  listen() {
    this.server.listen(this.port, () => {
      console.log(`Server running on port ${this.port}`);
    });
  }
}

module.exports = Model;