function JournalCard ({onJournal}){
    
    const {date, journalWriting, sleep, exercise, greenSpace, social, mindful, therapy, nutrition, mentalHealth} = onJournal
    

    return (
        <li>
            <div>Date:{date}</div>
            <div>Journal Prompt:</div>
            <div>
                <p>My thoughts: </p>
                <p> {journalWriting}</p>
            </div>
            <div>Hours of sleep: {sleep}</div>
            <div>Time spent exercising: {exercise}</div>
            <div>Time in greeen space {greenSpace}</div>
            <div>Number of positive social interactions: {social}</div>
            <div>Number of Mindful Breaks {mindful}</div>
            <div>Quality of balanced meals: {nutrition} / 10 </div>
            <div>Total media consumption: {mentalHealth} </div>
            <div>Attended Therapy? {therapy}</div>
        </li>
    )
}

export default JournalCard