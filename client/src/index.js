import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import ChatPage from "./components/ChatPage";
import Login from "./components/Login";
import GlobalContextProvider from './GlobalContext';
import "./index.css";
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <GlobalContextProvider>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<App />}>
                        <Route path="/chat" element={<ChatPage />} />
                        <Route path="/login" element={<Login />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </GlobalContextProvider>
    </React.StrictMode>
);