var mongoose = require("mongoose");                     // load module
var uri = "mongodb://localhost:27017/mydb";             // URI
mongoose.connect(uri, { useNewUrlParser: true });       // reference ready to connect
var db = mongoose.connection;                           // connect to database
mongoose.promise = global.Promise;
db.on("Error", (err) => console.log("Error generated..."))

db.once("open", function () {
    console.log("Connected!")

    // define schema for collection
    var productSchema = mongoose.Schema({
        _id: Number,
        name: String,
        price: Number
    });

    // map this schema to model
    var Product = mongoose.model("products", productSchema);

    // delete query
    Product.deleteOne({ price: 170000 }, (err, result) => {
        if (err) throw err;
        // console.log(result);
        if (result.deletedCount > 0) {
            console.log('Record deleted successfully!')
        } else {
            console.log('Deletion failed!')
        }
        db.close();
    })
});