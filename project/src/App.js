import React, {useState, useEffect} from "react"
import { Switch, Route } from "react-router-dom"
import Header from "./Header"
import MainPage from "./MainPage"
import NewJournal from "./NewJournal"
import PreviousJournals from "./PreviousJournals"
import JournalForm from "./JournalForm"
import Forum from "./Forum"


// npm install react-router-dom@5
function App() {
  // States
  const [page, setPage] = useState("/")
  const [randomQuote, setRandomQuote] = useState([])
  const [journalList, setJournalList] = useState([])

  // fetch Random Quote and update random quote
  
  useEffect(() => {
    fetch('https://api.quotable.io/random')
      .then(response => response.json())
      .then(response => setRandomQuote(response))
      .catch(err => console.error(err));
  }, []) 

  // fetch journals from db.json

  useEffect(() => {
    fetch("http://localhost:3000/journals")
      .then(response => response.json())
      .then(response => setJournalList(response))
  }, [])

 console.log(journalList)

  return (
    <div>
      <Header onChangePage={setPage} />
      <Switch>
        <Route exact path="/">
          <MainPage onRandomQuote={randomQuote} />
        </Route>
      <Route path="/NewJournal">
        <NewJournal onRandomQuote={randomQuote}/>
      </Route>
     <Route path="/PreviousJournals">
      <PreviousJournals onJournalList={journalList} />
     </Route>
     <Route path="/Forum">
      <Forum />
     </Route>
     <Route path="*">
                    <h1>404 not found</h1>
                </Route>
            </Switch>
     
      {/* <Forum /> */}
    </div>
  );
}

export default App;
