//External module
const express = require('express');
const hostRouter = express.Router();

//Local Modules
const hostController  = require("../controllers/hostController");

hostRouter.get("/add-home", hostController.getAddHome);  //Route of get AddHome request

hostRouter.post("/add-home", hostController.postAddHome);  //Route of post AddHome request

hostRouter.get("/host-home-list", hostController.getHostHomes);

module.exports = hostRouter;