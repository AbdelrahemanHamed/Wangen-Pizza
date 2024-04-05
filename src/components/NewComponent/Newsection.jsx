import React from "react";
import "./Newsection.css";
import Image1 from "../../images/landing page images/New folder/Pizza-Wangen-Parkplatz-1-1024x768 1.png";
import Image2 from "../../images/landing page images/New folder/Pizza-Wangen-Parkplatz-2-1024x768 1.png";
import Image3 from "../../images/landing page images/New folder/Pizza-Wangen-Parkplatz-3-1024x768 1.png";
import { useTheme } from '../../context'
const Newsection = () => {
  const { darkMode } = useTheme();
  return (
    <div className={darkMode?"new-section dark-bg":"new-section"}>
      <h1>
        Gratis <span> Parkplätze</span>
      </h1>
      <div className="image">
        <img src={Image1} alt="" />
        <img src={Image2} alt="" />
        <img src={Image3} alt="" />
      </div>
      <h2>Mehr informationen überWangen</h2>
      <p>
        Willkommen bei Wangen Pizza und Kebab Kurier! Geniessen Sie unsere
        köstlichen Speisen mit nur 4 einfachen Schritten. Ihre Bestellungen
        werden mit höchster Priorität bearbeitet und direkt durch unseren
        zuverlässigen Lieferdienst zu Ihnen gebracht. Erleben Sie
        unkomplizierten Genuss, ohne das Haus zu verlassen. Bestellen Sie jetzt
        und freuen Sie sich auf eine prompte Zustellung Ihrer Lieblingsspeisen!
      </p>
    </div>
  );
};

export default Newsection;
