//Making connections uwith mysql
const mysql = require("mysql2");

const pool = mysql.createPool({  //It is used to manage and establish a connection pool
  host: "localhost",
  user: "root",
  password: "Aryan#26@",
  database: "airbnb"
}); 

module.exports = pool.promise();  //This allows you to interact with the MySQL database using the modern JavaScript async/await syntax 