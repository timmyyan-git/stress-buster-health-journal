import JournalCard from "./JournalCard"

function PreviousJournals ( {onJournalList} ){
    const journalsToDisplay = onJournalList.map((journal) => { 
        return <JournalCard onJournal={journal} key={journal.id} />
    })
    console.log(onJournalList)


    return (
        

        <ul>
            <h1>Previous Journal</h1>
            {journalsToDisplay}
        </ul>
    )
}

export default PreviousJournals



