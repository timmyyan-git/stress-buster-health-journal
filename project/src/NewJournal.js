import JournalForm from "./JournalForm"
import RandomQuote from "./RandomQuote"
import MainPage from "./MainPage"

function NewJournal ({onRandomQuote}){
    const {author, content} = onRandomQuote
    return (
        <div>
           <h2> New Journal Entry</h2> 
           <h4>reflecting on your day can help release pent up tension. </h4>
           <h4> write freely or use our daily quote as a prompt! </h4>
           <div>
           <blockquote>&ldquo;{content}&rdquo; <footer>&mdash; {author}</footer></blockquote>
        </div>
            <JournalForm />
        </div>
    )
}

export default NewJournal