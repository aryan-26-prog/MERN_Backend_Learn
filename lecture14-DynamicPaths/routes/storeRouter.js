//Core Modules
const path = require('path');

const express = require('express');
const storeRouter = express.Router();
//Local Module
const storeController = require("../controllers/storeController");

storeRouter.get("/", storeController.getIndex);  //Route of get Homes request
storeRouter.get("/home-list", storeController.getHomes);
storeRouter.get("/bookings", storeController.getBookings);
storeRouter.get("/fav-list", storeController.getFavList);
storeRouter.get("/home-list/:homeID", storeController.getHomeDetails);
storeRouter.post("/favorites", storeController.postAddToFav);

module.exports = storeRouter;