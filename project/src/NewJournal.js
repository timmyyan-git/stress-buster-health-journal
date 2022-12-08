import JournalForm from "./JournalForm"
// import moment from "moment";

function NewJournal ({onUpdateJournalList, onRandomQuote}){
    const {author, content} = onRandomQuote
    return (
        <div id="new-journal-container">
                <h2 className="page-title"> New Journal Entry</h2> 
            <section id="entirePageColor"> 
                <br></br>
                <section id="prompt">
                    <div id="prompt-container">
                        <h2>Write freely or use our daily quote as a prompt! </h2>
                        <p>Reflecting on your day can help release pent up tension. </p>
                        <br></br>
                    </div>
                    <div>
                        <blockquote id="new-journal-quote">&ldquo;{content}&rdquo; <footer>&mdash; {author}</footer></blockquote>
                    </div>
                        <br></br>
                </section>
                <section id="journalForm">
                    <JournalForm onRandomQuote={onRandomQuote} onUpdateJournalList={onUpdateJournalList} />
                </section>
           </section>
        </div>
    )
}

export default NewJournal