import React from "react"
import './Launch.css'
//import 'https://fonts.googleapis.com/css2?family=Kanit:wght@100;200;300;400;500;600;700;800;900&display=swap';
const Launch = () => {
  return (
    <>
    <h1 style={{textAlign:"center",fontSize:"60px",color:"orangered",fontFamily:"Kanit,sans-serif"}}>Launching</h1>
    <div className="launch" style={{padding:"30px"}}>
      <img src="/src/Images/l1.jpeg"/>
      <img src="/src/Images/l2.jpeg"/>
      <img src="/src/Images/l3.jpeg"/>
      <img src="/src/Images/l4.jpeg"/>
      <img src="/src/Images/l5.jpeg"/>
      <img src="/src/Images/l6.jpeg"/>
    </div>
    </>
    
  )
};

export default Launch