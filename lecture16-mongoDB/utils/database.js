const mongodb = require("mongodb"); 

const MongoClient = mongodb.MongoClient; 

const MONGO_URI = YOUR_URI;

let _db;

const mongoConnect = (callback) => { 
  MongoClient.connect(MONGO_URI).then(client => { 
    callback(client); 
    _db = client.db('airbnb');
  }).catch(error => { 
    console.log("Error while connecting monogdb", error); 
  }); 
}

const getDB = () => {
  if(!_db) {
    throw new Error('Mongo not connected');
  }
  return _db;
}


module.exports = mongoConnect;
module.getDB = getDB;
