const mongodb = require("mongodb"); 
const MongoClient = mongodb.MongoClient; 

const MONGO_URI = YOUR_URI;

let _db;

const mongoConnect = (callback) => { 
  MongoClient.connect(MONGO_URI)
    .then(client => { 
      _db = client.db('airbnb');
      callback(); 
    })
    .catch(error => { 
      console.log("Error while connecting mongodb", error); 
    }); 
}

const getDB = () => {
  if (!_db) {
    throw new Error('Mongo not connected');
  }
  return _db;
}

module.exports = {
  mongoConnect,
  getDB
};
