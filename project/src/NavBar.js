import React from "react"
import { NavLink } from "react-router-dom"

function NavBar({ onChangePage }) {

function handleLinkClick (e) {
    e.preventDefault()
    onChangePage(e.target.pathname) }

    return (
        <nav>
            <NavLink id="home-nav" className="link" exact to="/"><button className="nav-button">Dashboard</button></NavLink>
            <NavLink id="new-Journal-nav"  className="link" to="/NewJournal"><button className="nav-button">New Journal</button></NavLink>
            <NavLink id="past-Journal-nav" className="link" to="/PreviousJournals"><button className="nav-button">Past Journals</button></NavLink>
            <NavLink id="community-nav" className="link" to="/Forum"><button className="nav-button">Community Forum</button></NavLink>
        </nav>
    );
        
}


export default NavBar