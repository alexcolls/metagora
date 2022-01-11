import React from 'react';
import './loading.css';
import logo from '../data/img/logo.png';
import favicon from '../data/img/favicon.png';


function Loader() {
    return (
    <div className="Screen">
      
        <img src={favicon} className="App-logo" alt="logo" />
        <img src={logo} className="App-logo2" alt="Metagora" />
        
        
   
    </div>
    )
}

export default Loader;
