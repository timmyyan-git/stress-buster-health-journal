import React from "react"


function NavBar({ onChangePage }) {

function handleLinkClick (e) {
    e.preventDefault()
    onChangePage(e.target.pathname) }

    return (
        <nav>
            <a onClick={handleLinkClick} href="/">MainPage</a>
            <a onClick={handleLinkClick} href="/NewJournal"> New Journal </a>
            <a onClick={handleLinkClick} href="/PreviousJournals">Journal List</a>
            <a onClick={handleLinkClick} href="/JournalList">Stress-less Community</a>
        </nav>
    );
        
}


export default NavBar