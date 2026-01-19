//Controllers = A controller in Express.js is a JavaScript function (or a collection of functions) that manages how your application responds to incoming HTTP requests.

const Home = require("../models/home");

//This middleware is used to show the get request add-homes page
exports.getAddHome = (req, res, next) => {
  console.log(req.url, req.method);
  res.render('host/edit-home', {pageTitle: 'Add Home to airbnb', editing: false, home: null});
};


//This middleware is used to show the get request of edit-homes page
exports.getEditHome = (req, res, next) => {
  const homeId = req.params.homeId;
  const editing = req.query.editing === 'true';  //used to read the editing type of query parameter from the url
  //This function is used to get the already filled details of edited home
  Home.findById(homeId, home => {
    if(!home) {
      console.log("Home not found for edit");
      return res.redirect("/host/host-home-list");
    }
    console.log(homeId, editing, home);
    res.render('host/edit-home', {home: home, pageTitle: 'Edit your Home', editing: editing});
  });
};

exports.getHostHomes = (req, res, next) => {
  Home.fetchAll().then(([registeredHomes, fields]) => {
  console.log(registeredHomes);
  res.render('host/host-home-list', {registeredHomes: registeredHomes, pageTitle: 'Host Homes List'});
  });
};


//this middleware is used to handle the post request of add-homes page.
exports.postAddHome = (req, res) => {
  const { houseName, price, location, rating, photoUrl, description } = req.body;

  const home = new Home(
    null,
    houseName,
    price,
    location,
    rating,
    photoUrl,
    description
  );

  home.save();
  res.redirect('/host/host-home-list');
};


exports.postEditHome = (req, res) => {
  const { homeId, houseName, price, location, rating, photoUrl, description } = req.body;

  const updatedHome = new Home(
    homeId,
    houseName,
    price,
    location,
    rating,
    photoUrl,
    description
  );

  updatedHome.save();
  res.redirect('/host/host-home-list');
};

//Used to delete homes from the hosthomes
exports.postDeleteHome = (req, res, next) => {
  const homeId = req.params.homeId;
  console.log("Came to delete", homeId);
  Home.deleteById(homeId, error => {
    if(error) {
      console.log("Error While Deleting", error);
    }
    res.redirect('/host/host-home-list');
  });
};
