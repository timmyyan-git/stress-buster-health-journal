import JournalCard from "./JournalCard"

function PreviousJournals ( {onJournalList} ){
    
    const journalsToDisplay = onJournalList.map((journal) => { 
        return <JournalCard onJournal={journal} key={journal.id} />
    })


    return (
        <div className="page-container">
        <h2 className="page-title">Your Journey So Far...</h2>
            <ul className="journal-container">
                {journalsToDisplay}
            </ul>
        </div> 
    )
}

export default PreviousJournals



