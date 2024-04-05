import React from "react";
import "./footer.css";
import logo from "../../images/footer/logo.png";
import faceIcon from "../../images/footer/facebook.png";
import XIcon from "../../images/footer/X.jpg";
import instagramIcon from "../../images/footer/instagram.png";
import image2 from "../../images/footer/5cfbc6e356d2ba7b85c0a7ecd5afc5d2-removebg-preview 1.png";
import image3 from "../../images/footer/dessert-main-image-molten-cake-0fbd4f2-removebg-preview 1.png";
import image1 from "../../images/footer/Hummus-snack-packs-626073e-removebg-preview 2.png";
import MapLocation from "../../components/Map/Map"
import { useTheme } from "../../context";
const Footer = () => {
  const { darkMode } = useTheme();
  return (
   <footer>
      <MapLocation darkMode={darkMode}/>
     <div className="footer">
      <div className="logo">
        <img src={logo} alt="" />
        
        <div className="line"></div>
        <ul>
        <li>
          <img src={image2} alt="" />
        </li>
        <li>
          <img src={image3} alt="" />
        </li>
        <li>
          <img src={image1} alt="" />
        </li>
      </ul>
          <div className="links">
          <div className="about-us">
      <h3>About Us</h3>
        <p>
          Lorem ipsum is placeholder text commonly used in the graphic, print,
          and publishing industries for previewing layouts and visual mockups.
          LOREM IPSUM GENERATOR
        </p>
      </div>
      <div className="menu">
      <h3>Menu</h3>
        <p>
        </p>
      </div>
      <div className="time">
      <h3>Öffnungszeiten</h3>
        <p><label>Mo - Do: <span className="inner-time">11.00-22.00 </span> </label><span>uhr</span></p>
        <p><label>Fr - Sa: <span className="inner-time">11.00-22.00 </span> </label><span>uhr</span>  </p>
        <p><label>    SO:   <span className="inner-time">11.00-22.00</span></label><span>uhr</span></p>
      </div>
      <div className="time">
      <h3>Liferzeiten</h3>
      <p><label>Mo - Do: <span className="inner-time">11.00-22.00 </span> </label><span>uhr</span></p>
        <p><label>Fr - Sa: <span className="inner-time">11.00-22.00 </span> </label><span>uhr</span>  </p>
        <p><label>    SO:   <span className="inner-time">11.00-22.00</span></label><span>uhr</span></p>
      </div>
          </div>

        <div className="social">
        <div className="image-icons">
        <img src={faceIcon} alt="" />
          <img src={instagramIcon} alt="" />
          <img src={XIcon} alt="" />
        </div>
          <div className="info">
            <a href="">Refund</a>
            <a href="">Policy</a>
          </div>
        </div>
      </div>
     
   
    </div>
    <p>@2024, Wangen Pizza kebab kurier, Developedbby Lightsoft</p>
   </footer>
  );
};

export default Footer;
