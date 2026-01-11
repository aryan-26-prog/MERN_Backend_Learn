//Core module
const path = require('path');
const express = require('express');
const hostRouter = express.Router();

//Local Modules
const rootDir = require("../utils/pathUtil");

//This middleware is used to show the get request add-homes page
hostRouter.get("/add-home", (req, res, next) => {
  console.log(req.url, req.method);
  res.render('addHome', {pageTitle: 'Add Home to airbnb'});
});

//Construct an array for add homes.
const registeredHomes = [];

//this middleware is used to handle the post request of add-homes page.
hostRouter.post("/add-home", (req, res, next) => {
  //for dynamically add homes in the backend 
  console.log("Home Registration Successfully for:", req.body, req.body.houseName);
  registeredHomes.push({houseName: req.body.houseName});
  res.render('homeAdded', {pageTitle: 'Home Added Successfully'});
});

exports.hostRouter = hostRouter;
exports.registeredHomes = registeredHomes;