import React from 'react'
import { Link, useOutletContext } from "react-router-dom";

const ChatPage = (props) => {
    const [messageArray, setMessageArray] = React.useState([]);
    const [message, setMessage] = React.useState("");
    const [ socket ] = useOutletContext()

    React.useEffect(() => {
        socket.on("message-recieve", (data) => {
            console.log(data)
            setMessageArray([...messageArray, data])
        })

        return () => {
            socket.off("message-recieve")
        }
    })

    const handleSendMessage = () => {
        socket.emit("message-send", message)
    }
    return (
        <div>
            <h1>Chat </h1>
            <Link to="/">App</Link>
            <br />
            <Link to="/login">Login</Link>
            <br />
            <Link to="/chat">Chat Page</Link>
            <div style={{ margin: "1rem", padding: "1rem", border: "1px solid red" }}>
                <h3>Messages: </h3>
                <br />
                { messageArray && messageArray.map((msg, i) => <div className="message" key={i} data-l={msg.l}>{msg.msg}</div>) }

            </div>
            <input type="text" placeholder="Enter Message Here" value={message} onChange={(e) => setMessage(e.target.value)}/>
            <button onClick={handleSendMessage}>Send Message</button>
        </div>
    )
}

export default ChatPage