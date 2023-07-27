import React  from 'react';
import ReactDOM from 'react-dom/client';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import './main.css';
import './assest/main'
import reportWebVitals from './reportWebVitals';
import $ from "jquery/dist/jquery.min.js";

import App from './App';



const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(

  <React.StrictMode>
    <App />

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
