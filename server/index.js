const express = require("express");
const socket = require("socket.io");
const bodyParser = require("body-parser");
const jwt = require("jsonwebtoken");
const uuid = require("uuid");
// const cors = require("cors");
const http = require("http");
const control = require("./control.js");

const app = express();
const httpServer = http.createServer(app);
const PORT = process.env.PORT || 8000;

const unique_ids = []

const io = new socket.Server(httpServer, {
    cors: {
        methods: ["POST"]
    }
})

io.on("connection", (socket) => {
    console.log("A user is connected.")

    socket.on("message-send", (data) => {
        socket.emit("message-recieve", {msg: data, l: true})
        socket.broadcast.emit("message-recieve", {msg: data, l: false})
    })

    socket.on("disconnect", () => {
        console.log("User Disconnected")
    })
})

app.post("/login", bodyParser.json(), (req,res) => {
    if (control.checkPin(req.body.pin)) {
        const v4id = uuid.v4()
        const v5id = uuid.v5(`${req.body.name}{${Math.random() * 2 / 100 % 500}}{${Math.random() * Math.random()}}`, v4id)
        const token = jwt.sign({name: req.body.name, id: v5id}, "ratchett-azwad-jahan-123")
        res.status(200).send({token})
    } else {
        res.sendStatus(401)
    }
})

httpServer.listen(PORT, () => {
	console.log(`Listening on the port ${PORT}`);
});