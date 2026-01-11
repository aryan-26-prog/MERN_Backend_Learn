//Core module
const path = require('path');
const express = require('express');
const hostRouter = express.Router();

//Local Modules
const rootDir = require("../utils/pathUtil");

//This middleware is used to show the get request add-homes page
hostRouter.get("/add-home", (req, res, next) => {
  console.log(req.url, req.method);
  res.sendFile(path.join(rootDir, 'views', 'addHome.html'));
});

//this middleware is used to handle the post request of add-homes page
hostRouter.post("/add-home", (req, res, next) => {
  res.sendFile(path.join(rootDir, 'views', 'homeAdded.html'));
});

module.exports = hostRouter;