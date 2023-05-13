import React, { useState } from 'react'
import "./Darkmode.css"
import Let from "./assets/let.png"
import Bet from "./assets/bet.png"
const Darkmode = () => {
    // const [color, setColor] = useState()
    const setDarkMode = () => {
        document.querySelector("body").setAttribute("data-theme", "dark")
        localStorage.setItem("selectedTheme", "dark")
    }

    const setLightMode = () => {
        document.querySelector("body").setAttribute("data-theme", "light")
        localStorage.setItem("selectedTheme", "light")
    }
    const selectedTheme = localStorage.getItem("selectedTheme");

    if(selectedTheme === "dark") {
        setDarkMode();
    }else setLightMode();

    const toggleTheme = (e)=> {
        if(e.target.checked) setDarkMode();
        else setLightMode()
    }
    // const labelTog = () => {
    //   if(selectedTheme === "dark") {
    //     <Let />
    //     // <img src={Let} alt='img' />
    //     console.log("dark")
    //   }else {
    //     <Bet />
    //     // <img src={Bet} alt='img' />
    //     console.log("light")
    //   }
    // }
    // const game = (e) => {
    //     {(e.target.checked) ? display <img src={Let} /> : <img src={Bet} /> }
    // }
  return (
    <div className='dark_mode'>
        {/* <div onClick={() => setColor(!color)}>
            {color ? selectedTheme === "dark" : selectedTheme === "light" }
            {color ? <Bet /> : <Let />}
        </div> */}
      <label for="darkmode-toggle">
        <img src={Let} alt='img' /> 
      </label>    
      <input 
        className='dark_mode_input'
        type='checkbox'
        id='darkmode-toggle'
        onChange={toggleTheme}
      />
      
      {/* <label className='dark_mode_label' for='darkmode-toggle'>
        
        <div id='lgt'></div>
      </label> */}

    </div>
  )
}

export default Darkmode
