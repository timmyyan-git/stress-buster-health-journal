import React, {useState, useEffect} from "react"
import Header from "./Header"
import NavBar from "./NavBar"
import MainPage from "./MainPage"
import NewJournal from "./NewJournal"
import PreviousJournals from "./PreviousJournals"
import Forum from "./Forum"

function App() {
  const [randomQuote, setRandomQuote] = useState([])

  console.log(randomQuote)
  // fetch Random Quote and update random quote
  
  useEffect(() => {
    fetch('https://api.quotable.io/random')
	.then(response => response.json())
	.then(response => setRandomQuote(response))
	.catch(err => console.error(err));
  }, []) 

  const [page, setPage] = useState("/")

  function getCurrentPage () {
    switch(page) {
      case "/":
        return <MainPage onRandomQuote={randomQuote} />
      case "/NewJournal":
        return <NewJournal />
      case "/PreviousJournals":
        return <PreviousJournals />
      default: 
        return <h1> 404 not found</h1>
    }
  }
  return (
    <div>
      <Header onChangePage={setPage} />
      {getCurrentPage()}

      {/* <Forum /> */}
    </div>
  );
}

export default App;
