//Body-parser is a crucial middleware in Express.js (and other Node.js frameworks) used to extract and parse the data sent in the body of incoming HTTP requests, such as those from POST or PUT methods.

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use((req, res, next) => {
  console.log("First Dummy Middleware", req.url, req.method);
  next();
});

app.use((req, res, next) => {
  console.log("Second Dummy Middleware", req.url, req.method);
  next();
});

// app.use((req, res, next) => {
//   console.log("Third Middleware", req.url, req.method);
//   res.send("<h1>Welcome to Complete Coding</h1>");
// });

app.get("/", (req, res, next) => {
  console.log("Handling / for GET", req.url, req.method);
  res.send(`<h1>Welcome to Complete Coding</h1>`);
});

app.get("/contact-us", (req, res, next) => {
  console.log("Handling /contact-us for GET", req.url, req.method);
  res.send(
    `<h1>Please send your Details</h1>
    <form action = "/contact-us" method=POST>
      <input type="text" name = "name" placeholder="Enter your name" />
      <input type="email" name = "email" placeholder="Enter your email" />
      <input type="submit" />
    </form>
    `);
});


app.post("/contact-us", (req, res, next) => {
  console.log("First Handling", req.url, req.method, req.body);
  next();
});


//Use of body bodyparser
app.use(bodyParser.urlencoded());

app.post("/contact-us", (req, res, next) => {
  console.log("Handling /contact-us for POST", req.url, req.method, req.body);
  res.send("We will contact you shortly");
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on th http://localhost:${PORT}`);
});