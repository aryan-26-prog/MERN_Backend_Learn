//Controllers = A controller in Express.js is a JavaScript function (or a collection of functions) that manages how your application responds to incoming HTTP requests.

const Home = require("../models/home");

//This middleware is used to show the get request add-homes page
exports.getAddHome = (req, res, next) => {
  console.log(req.url, req.method);
  res.render('host/addHome', {pageTitle: 'Add Home to airbnb'});
};

exports.getHostHomes = (req, res, next) => {
  Home.fetchAll((registeredHomes) => {
  console.log(registeredHomes);
  res.render('host/host-home-list', {registeredHomes: registeredHomes, pageTitle: 'Host Homes List'});
  });
};

//this middleware is used to handle the post request of add-homes page.
exports.postAddHome = (req, res, next) => {
  //for dynamically add homes in the backend 
  console.log("Home Registration Successfully for:", req.body);

  const {houseName, price, location, rating, photoUrl} = req.body;
  const home = new Home(houseName, price, location, rating, photoUrl);
  home.save();

  res.render('host/homeAdded', {pageTitle: 'Home Added Successfully'});
};
