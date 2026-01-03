const fs = require('fs');
const path = require('path');
const rootDir = require('../utils/pathUtil');
const { json } = require('stream/consumers');
const { log } = require('console');
const { list } = require('postcss');

const HomeDataPath = path.join(rootDir, 'data', 'homes.json');

// Fake Database
let registeredHomes = [];  //Construct an array for add homes.

module.exports = class Home{
  constructor(id, houseName, price, location, rating, photoUrl) {
    this.id = id;
    this.houseName = houseName;  // this is used to access the object.
    this.price = price;
    this.location = location;
    this.rating = rating;
    this.photoUrl = photoUrl;
  }

  //this function used to push data into the array
  save() {
    Home.fetchAll(homes => {

      if (this.id) {
        // ✅ EDIT CASE
        const updatedHomes = homes.map(home =>
          home.id === this.id ? this : home
        );

        fs.writeFile(HomeDataPath, JSON.stringify(updatedHomes, null, 2), err => {
          if (err) console.log(err);
        });

      } else {
        // ✅ ADD CASE
        this.id = Math.random().toString();
        homes.push(this);

        fs.writeFile(HomeDataPath, JSON.stringify(homes, null, 2), err => {
          if (err) console.log(err);
        });
      }

    });
  }

  //apply callback for handling async code 
  //This function is used to read the data from the file and show it permanently
  static fetchAll(callback) {
    fs.readFile(HomeDataPath, (err, data) => {
      console.log("File Read:", err, data);
      callback(!err ? JSON.parse(data) : []);  //using ternary operator for parsing
    });
  }

  //Used to find the particular home by id
  static findById(homeID, callback) {
    this.fetchAll(homes => {
      const homeFound = homes.find(home => home.id === homeID);
      callback(homeFound);
    })
  }

  static deleteById(homeID, callback) {
    this.fetchAll(homes => {
      homes = homes.filter(home => home.id != homeID);
      fs.writeFile(HomeDataPath, JSON.stringify(homes),callback);
    })
  }
}
