import React from "react"
import { NavLink } from "react-router-dom"

function NavBar({ onChangePage }) {

function handleLinkClick (e) {
    e.preventDefault()
    onChangePage(e.target.pathname) }

    return (
        <nav>
            <NavLink id="link" exact to="/">MainPage</NavLink>
            <NavLink id="link" to="/NewJournal"> New Journal </NavLink>
            <NavLink id="link" to="/PreviousJournals">Journal List</NavLink>
            <NavLink id="link" to="/Forum">Stress-less Community</NavLink>
        </nav>
    );
        
}


export default NavBar