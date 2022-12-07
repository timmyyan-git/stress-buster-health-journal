import React from "react"
import { NavLink } from "react-router-dom"

function NavBar({ onChangePage }) {

function handleLinkClick (e) {
    e.preventDefault()
    onChangePage(e.target.pathname) }

    return (
        <nav>
            <NavLink exact to="/">MainPage</NavLink>
            <NavLink to="/NewJournal"> New Journal </NavLink>
            <NavLink to="/PreviousJournals">Journal List</NavLink>
            <NavLink to="/Forum">Stress-less Community</NavLink>
        </nav>
    );
        
}


export default NavBar