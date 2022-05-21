import React from "react";
import "./style.css";

import Nav from './component/nav.js';

import Register from './component/Register.js';

import { Switch , Routes, Route,Link } from 'react-router-dom';

export default class   App extends React.Component{
  render(){
  return (        
          <Routes>   
           <Route exact path="/" element={<Nav/>} />
           <Route path="/register" element={<Register/>}/>
         </Routes>  
  );
  }
}
