import React from "react"
import { useState, useEffect } from "react"
import socket from "socket.io-client"
import Login from "./components/Login"
import ChatPage from "./components/ChatPage"

import { ToastContainer, toast } from 'react-toastify';

const io = socket("/")

const App = () => {
    const name = useState("");
    const pin = useState("");
    const [token, setToken] = useState("")
    const [connected, setConnected] = useState(false)

    useEffect(() => {
        io.on("login_success", (data) => {
            setToken(data)
            setConnected(true)
            toast.success("Login Success", {autoClose: 1000})
        })

        io.on("login_failed", () => {
            toast.error("Login Failed", {autoClose: 1000})
        })

        return () => {
            io.off("login_success")
            io.off("login_failed")
        }
    }, [])


    const handleSubmit = async (e) => {
        io.emit("login", {name: name[0], pin: pin[0]})
    }

    return (
        <div id="app">
            { !connected && <Login name={name} pin={pin} handleSubmit={handleSubmit} /> }
            { connected && <ChatPage click={() => io.emit("hello")}/>}
            <ToastContainer 
                position="bottom-right"
                theme="dark"
            />
        </div>
    )
}

export default App