// load all modules
var express = require("express");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var port = 9090;

// database url details
var url = "mongodb://localhost:27017/mydb";

// create express reference
var app = express();

// middleware modules
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// connect to database
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connection;

// code here
var Product = require("./router/product.router.js");
app.use("/product", Product);

// app.use("/customer", Customer);





app.listen(port, () => console.log(`Server is running on Port ${port}`));