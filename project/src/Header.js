import React from "react"
import NavBar from "./NavBar"
import logo from "./assets/Logo.jpg"


function Header ({onChangePage}){

    return (
        <div className= "header">
            <img id="logo" src={logo} alt="logo"></img>
            <h1 id="spicyTitle">Stress Buster</h1>
            <h3 id="subHeading"> Helping you cope with stress, one day at a time</h3>
        <NavBar className="header" onChangePage={onChangePage} />
        
        </div>
    )
}

export default Header