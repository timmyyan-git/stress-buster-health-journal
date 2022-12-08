import React from "react"
import { NavLink } from "react-router-dom"

function NavBar({ onChangePage }) {

function handleLinkClick (e) {
    e.preventDefault()
    onChangePage(e.target.pathname) }

    return (
        <nav>
            <NavLink id="home-nav" className="link" exact to="/">Dashboard</NavLink>
            <NavLink id="new-Journal-nav"  className="link" to="/NewJournal"> New Journal </NavLink>
            <NavLink id="past-Journal-nav" className="link" to="/PreviousJournals">Past Journals</NavLink>
            <NavLink id="community-nav" className="link" to="/Forum">Community Forum</NavLink>
        </nav>
    );
        
}


export default NavBar