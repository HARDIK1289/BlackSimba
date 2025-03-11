import React from "react";
import Gtext from "../Compo/Gtext";

import Navba from "../Compo/Navba";
import Particle from "../Particle";
import TrueFont from "../Compo/Truefont";
import "./Landpg.css";
import Footer from '../Compo/Footer'
import Vide from "../Compo/Vide";
import Reviews from '../Compo/Reviews'
import Model from "../Model";
import Launch from "../Compo/Launch";



const Landpg = () => {
  const handleAnimationComplete = () => {
    console.log("Animation completed!");
  };

  return (
    <>
      <Particle />
      <Navba />

      <TrueFont></TrueFont>
      <div className="en">Energy Drink</div>

      <Gtext
        colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
        animationSpeed={3}
        showBorder={false}
        className="custom-class   szie"
      >
        Drive the Spark,Break Boundaries,Boost Energy!!
      </Gtext>
      
      
   <Vide/>
   <Reviews/>
   <Launch/>
   <Footer/>
   {/* <Carousel/> */}
    <Model/>
 
    </>
  );
};

export default Landpg;
