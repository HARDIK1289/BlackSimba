import React from "react";
import "bulma/css/bulma.min.css";
import "./Navba.css"; 

const Navba = () => {

 

  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="bignav">
       <div className="igi"> <a className="navbar-item " href="/">
          <img src="/src/Images/IMG_20250311_090934.jpg" alt="Logo"  style={{height:"120px",width:"60px"}}/>
        </a></div>

        <div className="content">
          <a className="navbar-item">Home</a>
          <a className="navbar-item">About Me</a>
          <a className="navbar-item">Contact</a>
          <a className="but">BUY NOW</a>
        </div>
      </div>
    </nav>
  );
};

export default Navba;
