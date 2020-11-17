// import product.model.js
var ProductModel = require("../model/product.model.js");

// retrieve product details from DB
var GetProduct = (req, res) => {
    ProductModel.find({}, (err, data) => {
        if (err) throw err;

        res.json(data);

    });
};

var GetProductById = (req, res) => {
    var idInfo = req.param.id;
    console.log("Param info " + idInfo)
    ProductModel.find({ _id: idInfo }, (err, data) => {
        if (err) throw err;
        res.json(data);
    });
};

var StoreProduct = (req, res) => {
    let product = new ProductModel({
        _id: req.body.id,
        name: req.body.name,
        price: req.body.price
    });
    product.save((err, result) => {
        if (err) throw err;
        res.send('Record successfully stored!' + result);
    });
}

var UpdateProduct = (req, res) => {
    var updateId = req.body.id;
    var updateName = req.body.name;
    var updatePrice = req.body.price;
    ProductModel.update({ _id: updateId }, { $set: { name: updateName, price: updatePrice } }, (err, result) => {
        if (err) throw err;
        console.log(result);
        res.send('Record Updated!' + result);
    });
}

var DeleteProduct = (req, res) => {
    var deleteId = req.params.id;
    ProductModel.deleteOne({ _id: deleteId }, (err, result) => {
        if (err) throw err;
        console.log(result);
        res.send('Record Deleted!' + result)
    })
}

module.exports = { GetProduct, GetProductById, StoreProduct, UpdateProduct, DeleteProduct };