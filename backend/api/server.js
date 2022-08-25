const express = require("express");
const cors = require("cors");
require("dotenv").config();
const server = express();
const userRouter = require("./users/users-router");
const noteRouter = require("./notes/notes-router");

server.use(cors());
server.use(express.json());

server.use("/api/users", userRouter);
server.use("/api/notes", noteRouter);

module.exports = server;
