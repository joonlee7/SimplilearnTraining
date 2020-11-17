var express = require("express");   // load express
var app = express();                // create express reference
var port = 9090;                    // port number to use
var mongoose = require("mongoose");                     // load module
var uri = "mongodb://localhost:27017/mydb";             // URI
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });       // reference ready to connect
var db = mongoose.connection;                           // connect to database
mongoose.promise = global.Promise;
db.on("Error", (err) => console.log("Error generated..."))

var productInfo = [{ pid: 100, name: "Candy", price: 3000 },
{ pid: 101, name: "Chocolates", price: 3000 },
{ pid: 102, name: "Cookies", price: 3000 }
];

app.get('/products', (req, res) => {
    res.json(productInfo);  // json method helps to produce json data
});

app.get('/productsDb', (req, res) => {

    // define schema for collection
    var productSchema = mongoose.Schema({
        _id: Number,
        name: String,
        price: Number
    });

    // map this schema to model
    var Product = mongoose.model("products", productSchema);

    //  retrieve record
    Product.find({}, (err, result) => {
        if (err) {
            console.log("Error " + err);
        } else {
            res.json(result)
        }
        db.close();
    })
});







app.listen(port, () => console.log(`Server is running on Port ${port}`));