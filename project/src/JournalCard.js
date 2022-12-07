function JournalCard ({onJournal}){
    const {date, journalWriting, sleep, exercise, greenSpace, social, mindful, therapy} = onJournal
    console.log(journalWriting)

    return (
        <li>
            <div>Date:{date}</div>
            <div>
                <p>My thoughts: </p>
                <p> {journalWriting}</p>
            </div>
            <div>Hours of Sleep: {sleep}</div>
            <div>Exercised Today? {exercise}</div>
            <div>Green Space? {greenSpace}</div>
            <div>Meaningful Social Interaction: {social}</div>
            <div>Take Mindful Breaks? {mindful}</div>
            <div>Attened Therapy? {therapy}</div>
        </li>
    )
}

export default JournalCard