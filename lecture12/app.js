//Core Module
const path = require('path');

//external modules
const express = require('express');

//Local Module
const userRouter = require("./routes/userRouter");
const {hostRouter} = require('./routes/hostRouter');
const rootDir = require("./utils/pathUtil");

const app = express();

//ejs engine syntax
app.set('view engine', 'ejs');
app.set('views', 'views');

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
app.use(express.static(path.join(rootDir, 'public')));


app.use((req, res, next) => {
  res.status(404).render('404', {pageTitle: 'Page Not Found'});
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on the http://localhost:${PORT}`);
});