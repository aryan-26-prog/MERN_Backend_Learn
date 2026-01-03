//Core Module
const path = require('path');

//external modules
const express = require('express');

//Local Module
const userRouter = require("./routes/userRouter");
const hostRouter = require('./routes/hostRouter');
const rootDir = require("./utils/pathUtil");

const app = express();

//This middleware is used to lock the urls and then move the next urls.
app.use((req, res, next) => {
  console.log(req.url, req.method);
  next();
});

//It is used to parsed the post bodyObject. 
app.use(express.urlencoded());
app.use(userRouter);
app.use("/host", hostRouter);

//Middleware for accessing th public folders
app.use(express.static(path.join(rootDir, 'public')))


app.use((req, res, next) => {
  res.status(404).sendFile(path.join(rootDir, 'views', '404.html'));
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on the http://localhost:${PORT}`);
});