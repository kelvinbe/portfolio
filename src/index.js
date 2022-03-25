import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import AboutMe from './components/About/AboutMe'
import Portfolio from './components/Portfolio/Portfolio'

ReactDOM.render(
  <BrowserRouter>
  <Routes>
    <Route  path="/" element={<App />} />
    <Route  path="aboutme" element={<AboutMe />} />
    <Route  path="portfolio" element={<Portfolio />} />


  
    </Routes>
    </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
