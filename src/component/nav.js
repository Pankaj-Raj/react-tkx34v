
import React from "react";
import { Switch , Routes, Route,Link } from 'react-router-dom';
export default class Nav extends React.Component{
render(){
  return(
    <header>
    <nav>
      <ul>
        <li>
          <Link to="/register">Register</Link>
        </li>
        <li>
          <Link to="test">Test</Link>
        </li>
      </ul>
    </nav>
  </header>    
  );
}
}