import React from "react";
import "./style.css";

import Register from './component/register.js';



import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

export default class   App extends React.Component{
  render(){
  return (
    <Router>
      <div className="App">
        <h1>Welcome</h1>
      
        <Routes>
          <Route path="/" element={<Register />} />
        
        </Routes>
      </div>
    </Router>
  );
  }
}
