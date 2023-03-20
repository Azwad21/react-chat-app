import React from "react";
import socket from "socket.io-client";
import { useNavigate, Outlet } from "react-router-dom";
// import { GlobalContextConsumer } from "./GlobalContext";

const io = socket("/")

const App = () => {
    const navigate = useNavigate()
    // const {azwad, setValue} = React.useContext(GlobalContextConsumer);

    return (
        <div id="app">
            <h1> Welcome to Chat Feast</h1>
            <button type="button" onClick={() => navigate("/login")}>Login</button>
            <button type="button" onClick={() => navigate("/chat")}>chat</button>
            <Outlet context={[io]}/>
        </div>
    )
}

export default App