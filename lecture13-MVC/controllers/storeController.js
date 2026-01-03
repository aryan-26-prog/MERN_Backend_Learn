//Controllers = A controller in Express.js is a JavaScript function (or a collection of functions) that manages how your application responds to incoming HTTP requests.

const Home = require("../models/home");

//This middleware to used get homes list and show it in the UI
exports.getHomes = (req, res, next) => {
  Home.fetchAll((registeredHomes) => {
    console.log(registeredHomes);
  res.render('store/home-list', {registeredHomes: registeredHomes, pageTitle: 'Homes List'});
  });
};

exports.getIndex = (req, res, next) => {
  Home.fetchAll((registeredHomes) => {
    console.log(registeredHomes);
  res.render('store/index', {registeredHomes: registeredHomes, pageTitle: 'airbnb Home'});
  });
};

exports.getBookings = (req, res, next) => {
  Home.fetchAll((registeredHomes) => {
    console.log(registeredHomes);
  res.render('store/bookings', {registeredHomes: registeredHomes, pageTitle: 'My Bookings'});
  });
};

exports.getFavList = (req, res, next) => {
    Home.fetchAll((registeredHomes) => {
    console.log(registeredHomes);
    res.render('store/fav-list', {registeredHomes: registeredHomes, pageTitle: 'My Favorites'});
  });
};