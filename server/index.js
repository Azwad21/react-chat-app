const express = require("express");
const socket = require("socket.io");
const bodyParser = require("body-parser");
const jwt = require("jsonwebtoken");
const cors = require("cors");
const http = require("http");
const control = require("./control.js");

const app = express();
const httpServer = http.createServer(app);
const PORT = process.env.PORT || 8000;

const io = socket(httpServer)

io.on("connection", (client_socket) => {
	client_socket.on("login", (data) => {
		const {name, pin} = data
		const token = jwt.sign({name}, "azwad")

		if (control.checkPin(pin)) {
			io.emit("login_success", token);
		} else {
			io.emit("login_failed");
		}
	})
    client_socket.on("hello", (data)=> {
        console.log("Hello")
    })
})

app.use(cors())

app.get("/", (req,res) => {
	console.log("Hello World");
	res.send("Hello World");
});

httpServer.listen(PORT, () => {
	console.log(`Listening on the port ${PORT}`);
});