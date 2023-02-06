import React from 'react';
import ReactDOM from "react-dom";
import './index.css';
import App from './App';

/*
entry point to script in browser

https://reactjs.org/docs/glossary.html#react-elements
https://stackoverflow.com/questions/30971395/difference-between-react-component-and-react-element#:~:text=React%20Element%20%2D%20It%20is%20a,apply%20any%20methods%20on%20it.&text=React%20Component%20%2D%20It%20is%20a,and%20returns%20a%20React%20element.
*/
ReactDOM.render(
    <App/>, document.getElementById("root")
);
