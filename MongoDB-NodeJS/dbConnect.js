
// load the mongoDB module as well as create the reference of that module
var MongoClient = require("mongodb").MongoClient;


//         mongoDB://serverIP:port#/databasename
var uri = "mongodb://localhost:27017/mydb";

MongoClient.connect(uri, (err, db) => {
    if (err) {
        console.log("Error generated...")
    } else {
        console.log("Database connected successfully...")
        // db.collection("Emp").insertOne({ _id: 100, name: "Ramesh", salary: 34000 }, (err, res) => {
        //     if (err) {
        //         console.log("Error " + err)
        //     } else {
        //         console.log("Record inserted successfully!")
        //     }
        // })
    }
    db.close();
});