import React from 'react'
import './Vide.css'
const Vid = () => {
  return (
    <div className="ve">
        <div className="container">
          <h3 className='head'>Black Simba - Your Source of Energy and Vitality!</h3>
          <p className='par'>Black Simba is more than just an energy drink – it’s a lifestyle. Our premium energy booster drink is meticulously crafted to give you the power and stamina you need to conquer your day. Whether you’re an athlete pushing your limits, a professional striving for success, or simply someone who wants to feel revitalized, Black Simba is your ultimate companion.</p>
        </div>
      <video autoPlay loop muted>
      <source src="/src/Images/MP4_20250311_101423VLOG.mp4"  ></source></video>
      </div>
  )
}

export default Vid
