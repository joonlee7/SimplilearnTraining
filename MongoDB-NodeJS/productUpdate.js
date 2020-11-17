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

    // update product using ID
    Product.updateOne({ _id: 102 }, { $set: { price: 80000 } }, (err, result) => {
        if (err) {
            console.log("Error Generated!" + err);
        } else {
            // console.log("Updated successfully! " + result.nModified)
            if (result.nModified == 0) {
                console.log("Record did not update.");
            } else {
                console.log("Successful! No. of records updated: " + result.nModified);
            }
        }
        db.close();
    });
});
