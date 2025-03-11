import React from "react";
import "./Foot.css";

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="footer-content">
        {/* About Section */}
        <div className="footer-section">
          <h3>Manufactured & Packed</h3>
          <p>
            BLUE MARINE BOTTLING COMPANY Madhur, Kasaragod, Kerala, India
            -671124
          </p>
          <br />
          <h3>Marketer</h3>
          <p>
            fssai: 11323999000547 HASBI INDUSTRIES LLP Orikkadavu, Padne,
            Thrikkaripur, Kasaragod kerala- 671312 (INDIA)
          </p>
        </div>

        {/* Quick Links Section */}
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/aboutus">About</a>
            </li>
          </ul>
        </div>

        {/* Contact Info Section */}
        <div className="footer-section">
          <h3>Contact Info</h3>
          <ul>
            <li>Email: xyz@example.com</li>
            <li>Phone: +1 234 567 890</li>
            <li>Address: 123 Main St, Mumbai, India</li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} XYZ. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
