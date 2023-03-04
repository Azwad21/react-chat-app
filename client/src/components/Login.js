import React from "react"
// import { useState, useEffect } from "react"
// import socket from "socket.io-client"

const Login = ({name, pin, handleSubmit}) => {
	// const [name, setName] = useState("");
	// const [pin, setPin] = useState("");

	// const handleSocketConnection = (responseStatus, token) => {
	// 	if (responseStatus == 200) {
	// 		const io = socket("/")

	// 		io.on("connect", () => {
	// 			console.log("Yahoo!! Connected")
	// 		})
	// 	} else {
	// 		console.log("Not Ready")
	// 	}
	// }

	// const handleSubmit = async (e) => {
	// 	const response = await fetch("/login", {
	// 		method: "POST",
	// 		headers: { "Content-Type": "application/json" },
	// 		body: JSON.stringify({name,pin})
	// 	})

	// 	// setResponseStatus(response.status)
	// 	// setToken(response.headers.get("token"))
	// 	handleSocketConnection(response.status, response.headers.get("token"))
	// }

	return (
		<div id="login">
			<div>
				<input 
					placeholder="Enter Name"
					value={name[0]}
					onChange={(e) => name[1](e.target.value)}
				/>
				<input
					type="password"
					placeholder="Enter Pin"
					value={pin[0]}
					onChange={(e) => pin[1](e.target.value)}
				/>
				<button type="submit" onClick={handleSubmit}>Enter Chat</button>
			</div>
		</div>
	)
}

export default Login