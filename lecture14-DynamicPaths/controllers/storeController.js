//Controllers = A controller in Express.js is a JavaScript function (or a collection of functions) that manages how your application responds to incoming HTTP requests.

const Favorite = require("../models/favorite");
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

exports.postAddToFav = (req, res) => {
  const homeID = req.body.homeId;

  Home.findById(homeID, home => {
    if (home) {
      Favorite.add(home);
    }
    res.redirect("/fav-list");
  });
};

exports.postRemoveFromFavorite = (req, res) => {
  const homeId = req.params.homeId;
  Favorite.deleteById(homeId, error => {
    if(error) {
      console.log("Error while removing from favorites", error);
    }
    res.redirect("/fav-list");
  });
};

exports.getFavList = (req, res) => {
  Favorite.getAll(favorites => {
    res.render("store/fav-list", {
      registeredHomes: favorites,
      pageTitle: "My Favorites"
    });
  });
};

exports.getHomeDetails = (req, res, next) => {
  const homeID = req.params.homeID;
  console.log("At home details page", homeID);

  Home.findById(homeID, (home) => {
    if (!home) {
      console.log("Home not found");
      return res.redirect('/home-list');
    }
    console.log("Home details found:", home);

    res.render('store/home-detail', {
      home: home,
      pageTitle: home.houseName
    });
  });
};

