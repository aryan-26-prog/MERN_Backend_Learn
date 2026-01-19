const db = require("../utils/database");

module.exports = class Home{
  constructor(id, houseName, price, location, rating, photoUrl, description) {
    this.id = id;
    this.houseName = houseName;  // this is used to access the object.
    this.price = price;
    this.location = location;
    this.rating = rating;
    this.photoUrl = photoUrl;
    this.description = description;
  }

  //this function used to push data into the array
  save() {
  if (this.id) {
    // UPDATE
    return db.execute(
      `UPDATE homes 
       SET houseName=?, price=?, location=?, rating=?, photoUrl=?, description=? 
       WHERE id=?`,
      [
        this.houseName,
        this.price,
        this.location,
        this.rating,
        this.photoUrl,
        this.description,
        this.id
      ]
    );
  }

  // INSERT
  return db.execute(
    `INSERT INTO homes (houseName, price, location, rating, photoUrl, description)
     VALUES (?, ?, ?, ?, ?, ?)`,
    [
      this.houseName,
      this.price,
      this.location,
      this.rating,
      this.photoUrl,
      this.description
    ]
  );
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
