//external module
const express = require('express');

const app = express();
//Adding Middleware using use() function
app.use("/",(req, res, next) => {
  console.log("Came in first Middleware", req.url, req.method);
  res.send("<p>Welcome to complete coding MERN Stack series</p>")
  next();
});

app.use("/submit-details", (req, res, next) => {
  console.log("Came in second Middleware", req.url, req.method);
  res.send("<p>Welcome to complete coding MERN Stack series</p>");
});

const PORT = 3002;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});