function JournalCard ({onJournal}){
    
    const {date, quote,  journalWriting, sleep, exercise, greenSpace, social, mindful, therapy, nutrition, mentalHealth} = onJournal
    const {content, author} = quote

    return (
        <li className="journal-card">
            <div id="journal-date">{date}</div>
            <div id="journal-prompt">
                <p><b>Journal Prompt:</b></p>
                <p>"{content}"</p>
                <p> - {author}</p>
            </div>
            <div id="journal-thoughts">
                <p>My thoughts: </p>
                <p> {journalWriting}</p>
            </div>
            <div className="journal-metrics">
                <div className="metric-cards">
                    <p><b>Sleep:</b></p> 
                    <p className="metric">{sleep} hours</p>
                </div>
                <div className="metric-cards">
                    <p><b>Exercise:</b></p> 
                    <p className="metric">{exercise} minutes</p> 
                </div>
                <div className="metric-cards">
                    <p><b>Nature:</b></p>
                    <p className="metric">{greenSpace} minutes</p>
                </div>
                <div className="metric-cards">
                    <p><b>Positive Interactions:</b></p> 
                    <p className="metric">{social}</p>
                </div>
                <div className="metric-cards">
                    <p><b>Mindful Breaks:</b></p> 
                    <p className="metric">{mindful}</p>
                </div>
                <div className="metric-cards">
                    <p><b>Nutrition:</b></p> 
                    <p className="metric">{nutrition} / 10</p> 
                </div>
                <div className="metric-cards">
                    <p><b>Media Consumption:</b></p>
                    <p className="metric">{mentalHealth}</p>
                </div>
                <div className="metric-cards">
                    <p><b>Attended Therapy:</b></p>
                    <p className="metric">{therapy}</p>
                </div>
            </div>
        </li>
    )
}

export default JournalCard