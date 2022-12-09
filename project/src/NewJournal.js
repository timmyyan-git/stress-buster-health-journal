import JournalForm from "./JournalForm"
// import moment from "moment";

function NewJournal ({onUpdateJournalList, onRandomQuote}){
    const {author, content} = onRandomQuote
    return (
        <div>
           <h2 className="page-title"> New Journal Entry</h2> 
            <section id="entirePageColor"> 
            

            <section id="prompt">
           <h1>Reflecting on your day can help release pent up tension. <br/>
            write freely or use our daily quote as a prompt! </h1>
            <br></br>
            <br></br>
           <div>
           <blockquote id="quote">&ldquo;{content}&rdquo; <footer>&mdash; {author}</footer></blockquote>
           </div>
           <br></br>
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