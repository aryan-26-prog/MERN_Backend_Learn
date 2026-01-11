const fs = require('fs');
const path = require('path');
const rootDir = require('../utils/pathUtil');
const { json } = require('stream/consumers');
const { log } = require('console');

// Fake Database
let registeredHomes = [];  //Construct an array for add homes.

module.exports = class Home{
  constructor(houseName, price, location, rating, photoUrl) {
    this.houseName = houseName;  // this is used to access the object.
    this.price = price;
    this.location = location;
    this.rating = rating;
    this.photoUrl = photoUrl;
  }

  //this function used to push data into the array
  save() {
    Home.fetchAll(registeredHomes => {  //this callback is used to fetch all registered homes
      registeredHomes.push(this);
      const HomeDataPath = path.join(rootDir, 'data', 'homes.json');
      fs.writeFile(HomeDataPath, JSON.stringify(registeredHomes), error => {
      console.log("File writing concluded", error);
    });
    });
  }

  //apply callback for handling async code 
  //This function is used to read the data from the file and show it permanently
  static fetchAll(callback) {
    const HomeDataPath = path.join(rootDir, 'data', "homes.json");
    fs.readFile(HomeDataPath, (err, data) => {
      console.log("File Read:", err, data);

      callback(!err ? JSON.parse(data) : []);  //using ternary operator for parsing
    });
  }
}