import React from "react"
import { Link } from "react-router-dom"

function NavBar({ onChangePage }) {

function handleLinkClick (e) {
    e.preventDefault()
    onChangePage(e.target.pathname) }

    return (
        <nav>
            <Link to="/">MainPage</Link>
            <Link to="/NewJournal"> New Journal </Link>
            <Link to="/PreviousJournals">Journal List</Link>
            <Link to="/JournalForm">Stress-less Community</Link>
        </nav>
    );
        
}


export default NavBar