//Core Module
const path = require('path');

//external modules
const express = require('express');

//Local Module
const storeRouter = require("./routes/storeRouter");
const hostRouter = require('./routes/hostRouter');
const rootDir = require("./utils/pathUtil");
const errorsController = require("./controllers/errors");

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
app.use(storeRouter);
app.use("/host", hostRouter);

//Middleware for accessing th public folders
app.use(express.static(path.join(rootDir, 'public')));


app.use(errorsController.pageNotFound);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on the http://localhost:${PORT}`);
});