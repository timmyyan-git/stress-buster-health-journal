import React from "react"
import NavBar from "./NavBar"
import logo from "./assets/Logo.jpg"


function Header ({onChangePage}){

    return (
        <div>
            <div className= "header"> 
            <img id="logo" src={logo} alt="logo"></img>
            <h1>Stress Buster</h1>
            <h4> helping you cope with stress, one day at a time</h4>
        </div> 
        <NavBar className="header" onChangePage={onChangePage} />
        </div>
    )
}

export default Header