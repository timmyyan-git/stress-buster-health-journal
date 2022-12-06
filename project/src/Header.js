import React from "react"
import NavBar from "./NavBar"


function Header (){

    return (
        <div>
            <div className= "header"> 
        <h1>Stress Buster</h1>
        <h4> helping you cope with stress, one day at a time</h4>
        </div> 
        <NavBar />
        </div>
    )
}

export default Header