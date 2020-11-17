var http = require("http");
var server = http.createServer((req, res) => {
	console.log("Welcome to Node Http Module");
		// code here
	res.write("Welcome to Node Http Module");
	res.end();
});
server.listen(9090);
console.log("Server is running on port number 9090");