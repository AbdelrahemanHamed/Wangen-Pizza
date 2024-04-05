import React, {  useState } from 'react'
import "./Home.css"
import Navbar from '../../components/Navbar/Navbar'
import Dark_mood from "../../images/landing page images/navbar images/dark&whitemood.png"
import About from '../../components/About/About'
import ProductList from '../../components/Prodects/ProductList'
import backgroundImage from "../../images/background/hero-bg.svg"
import backgroundImage2 from "../../images/background/hero-bg-2.jpg"
import backgroundImage3 from "../../images/background/hero-bg3.jpg"
import Footer from '../../components/Footer/Footer'
import WhatsappIcon from "../../images/WhatsApp_icon.png"
import { useTheme } from '../../context'
const Home = ({CartPop}) => {
  const [slide,setSlid]=useState(backgroundImage)

  //  const [isDark,setIsDark]=useState(false)

  // const changeMood=()=>{
  //   setIsDark(!isDark)
  // }
  const { darkMode, toggleDarkMode } = useTheme();
  
  return (
  <>
    <div className={!CartPop?"hero-section bluer":"hero-section"} id='Home' style={{backgroundImage: `url(${slide})`}}>
<Navbar/>
<a href=""><img src={WhatsappIcon} className="WhatsappIcon" alt="" /></a>
<section className="hero-main-section">
  <div className="text">
    <h1>Wangen Pizza und  
      <br />
      Kebab Kurier
    </h1>
    <h3 className="desc">menschen Ennttauschen , Aber Pizaa Nie</h3>
    <button className="hero-btn">jetzt bestellen</button>
  </div>
  <div className="toggle-btn">
    <img src={Dark_mood} alt=""  className="dark-image-mode" onClick={()=>{toggleDarkMode()}} />
  </div>
   <div className="slide-bg">
    <span onClick={()=>{setSlid(backgroundImage2)}}></span>
    <span onClick={()=>{setSlid(backgroundImage)}}></span>
    <span onClick={()=>{setSlid(backgroundImage3)}}></span>
   </div>
   
</section>
   </div>
   <About isDark={darkMode}/>
   <ProductList  isDark={darkMode}/>
   <Footer/>
  
  </>
         
    
  )
}

export default Home