const db = require("../utils/database");

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
    
  }

  
  //This function is used to execute the data from the DB and show it permanently
  static fetchAll(callback) {
    return db.execute('SELECT * FROM homes')  //This function is used to execute
  }

  //Used to find the particular home by id
  static findById(homeID, callback) {
    
  }

  static deleteById(homeID, callback) {
    
  }
}
