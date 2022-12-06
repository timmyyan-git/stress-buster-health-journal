import React, {useState, useEffect} from "react"
import Header from "./Header"
import MainPage from "./MainPage"
import NewJournal from "./NewJournal"
import PreviousJournals from "./PreviousJournals"
import Forum from "./Forum"

function App() {
  const [randomQuote, setRandomQuote] = useState([])

  
  
  useEffect(() => {
    fetch('https://api.quotable.io/random')
	.then(response => response.json())
	.then(response => setRandomQuote(response))
	.catch(err => console.error(err));
  }, []) 

  return (
    <div>
      <b>HELLO from App!</b>
      <Header />
      <MainPage onRandomQuote={randomQuote}/>
      <NewJournal />
      <PreviousJournals />
      <Forum />
    </div>
  );
}

export default App;
