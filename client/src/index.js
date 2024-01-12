import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import {GoogleOAuthProvider} from "@react-oauth/google"

const clientId = process.env.REACT_APP_GOOGLE_CLIENT_ID;
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <GoogleOAuthProvider clientId={clientId}>
                <App/>
            </GoogleOAuthProvider>
        </BrowserRouter>
    </React.StrictMode>
);

