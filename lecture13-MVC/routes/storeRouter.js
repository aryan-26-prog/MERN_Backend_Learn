//Core Modules
const path = require('path');

const express = require('express');
const storeRouter = express.Router();
//Local Module
const homesController = require("../controllers/storeController");

storeRouter.get("/", homesController.getIndex);  //Route of get Homes request
storeRouter.get("/homes", homesController.getHomes);
storeRouter.get("/bookings", homesController.getBookings);
storeRouter.get("/fav-list", homesController.getFavList);

module.exports = storeRouter;