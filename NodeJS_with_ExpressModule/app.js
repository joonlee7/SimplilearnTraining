var port = 9090;
var express = require("express");
var app = express();
var bodyParser = require("body-parser");

// middleware
app.use(bodyParser.json()); // unable to post method body data
app.use(express.urlencoded({ extended: true }));

app.use((req, res, next) => {
    console.log('Middleware called...');
    console.log(req.url);
    console.log(req.method);
    next();
});

console.log("Module loaded...");
app.listen(port, () => console.log(`Server is running on ${port}`));

app.get("/", (req, res) => {
    res.send("Welcome to Express Module - Get Method (generic path)");
});

app.get("/a", (req, res) => {
    res.send("Welcome to Express Module - Get Method (specific path A)");
});

app.get("/b", (req, res) => {
    res.send("Welcome to Express Module - Get Method (specific path B)");
});

app.get("/c", (req, res) => {
    res.send("Welcome to Express Module - Get Method (specific path C)");
});

// -----------------------------------------------------------------------------------------------

/** 
 * PATH PARAM EXAMPLE
 * http://localhost:9090/user/joon/lee
*/

app.get("/user/:fname/:lname", (req, res) => {
    console.log(req.params);
    let user = req.params.fname;
    // res.send("You sent path param data.");
    res.send("Welcome " + user);
});


/**
 * QUERY PARAM EXAMPLE
 * http://localhost:9090/emp?id=100&name=Joon&salary=70000
 */

app.get("/emp", (req, res) => {
    let id = req.query["id"];
    let name = req.query["name"];
    let salary = req.query["salary"];
    res.send("Id is " + id + " Name is " + name + " Salary is " + salary);
});

app.get("/login", (req, res) => {
    let username = req.query["username"];
    let password = req.query["password"];
    if (username == "joonlee" && password == "abc123") {
        res.send("Login successful!");
    } else {
        res.send("Login failed!");
    }
});

app.get("/loginPage", (req, res) => {
    res.sendFile("./loginPage.html");
});

// -------------------------------------------------------------------------------------------------

/* POST Method */

app.post("/", (req, res) => {
    console.log("POST method called...");
    res.send("Welcome to POST Method");
});

app.post("/login", (req, res) => {
    let username = req.body.username;
    let password = req.body.password;
    if (username == "joonlee" && password == "abc123") {
        res.send("Login successful!");
    } else {
        res.send("Login failed!");
    }
});

app.put("/", (req, res) => {
    res.send("Put method called...")
})

app.put("/updateEmp", (req, res) => {
    let id = req.body.id;
    let salary = req.body.salary;
    console.log(`ID is ${id} and salary is ${salary}`)
    salary = eval(salary) + 5000;
    res.send('Salary is $' + salary);
})

app.delete("/", (req, res) => {
    res.send("Delete method called...")
})

app.delete("/updateEmp/:id", (req, res) => {
    let id = req.params.id;
    res.send('You record with ' + id + ' has been deleted successfully.');
})




