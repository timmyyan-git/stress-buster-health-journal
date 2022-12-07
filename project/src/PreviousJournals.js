import JournalCard from "./JournalCard"

function PreviousJournals ( {onJournalList} ){
    
    const journalsToDisplay = onJournalList.map((journal) => { 
        return <JournalCard onJournal={journal} key={journal.id} />
    })


    return (
        

        <ul>
            <h1>Your Journey So Far...</h1>
            {journalsToDisplay}
        </ul>
    )
}

export default PreviousJournals



