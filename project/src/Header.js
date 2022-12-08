import React from "react"
import NavBar from "./NavBar"
import logo from "./assets/Logo.jpg"


function Header ({onChangePage}){

    return (
        <header className= "header">
            <div>
                <img id="logo" src={logo} alt="logo"></img>
                </div>
            <div id="main-title">
                <h1 id="spicyTitle">Stress Buster</h1>
                <h3 id="subHeading"> Helping you cope with stress, one day at a time</h3>
            </div>
            <div id="nav-bar">
                <NavBar onChangePage={onChangePage} />
            </div>
        </header>
    )
}

export default Header