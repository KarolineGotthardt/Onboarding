import React from 'react';
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";

import './index.css';
import App from './App';

/*
Wrap App Component with Router Component to add routing
 */
ReactDOM.render(
    <BrowserRouter>
        <App/>
    </BrowserRouter>,
    document.getElementById("root")
);
