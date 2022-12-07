import JournalForm from "./JournalForm"
// import moment from "moment";

function NewJournal ({onUpdateJournalList, onRandomQuote}){
    const {author, content} = onRandomQuote
    return (
        <div>
            
           <h2> New Journal Entry</h2> 
           <h4>reflecting on your day can help release pent up tension. </h4>
           <h4> write freely or use our daily quote as a prompt! </h4>
           <div>
           <blockquote>&ldquo;{content}&rdquo; <footer>&mdash; {author}</footer></blockquote>
        </div>
            <JournalForm onUpdateJournalList={onUpdateJournalList} />
        </div>
    )
}

export default NewJournal