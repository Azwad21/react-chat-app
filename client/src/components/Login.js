import React from "react";
import {GlobalContext} from "../GlobalContext";
import {useNavigate} from "react-router-dom";

const Login = () => {
    const navigate = useNavigate();
    const [name, setName] = React.useState("")
    const [pin, setPin] = React.useState("");

    const { connected, setValue } = React.useContext(GlobalContext);

    React.useEffect(() => {
        if (connected) {
            navigate("/chat")
        }
    }, [connected, navigate])

    async function handleclick() {
        if (!name || !pin) return
        const response = await fetch("/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ name, pin })
        });
        const responseData = await response.json()
        if (response.status === 200) {
            setValue({ connected: true, token: responseData.token });
        } else {
            setValue({ connected: false });
        }
    }

    return (
        <div id="login">
            <h1>Login Page</h1>
            <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
            <input type="password" placeholder="Pin" value={pin} onChange={(e) => setPin(e.target.value)} />
            <button type="button" onClick={handleclick}>Login</button>
            {connected ? <h3>Connected</h3> : <h3>Not Connected</h3>}
        </div>
    )
}

export default Login