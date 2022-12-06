import React, {useState} from "react"
import Header from "./Header"
import NavBar from "./NavBar"
import MainPage from "./MainPage"
import NewJournal from "./NewJournal"
import PreviousJournals from "./PreviousJournals"
import Forum from "./Forum"

function App() {
  const [page, setPage] = useState("/")

  function getCurrentPage () {
    switch(page) {
      case "/":
        return <MainPage />
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
      <Header />
      <NavBar onChangePage={setPage} />
      {getCurrentPage()}
      {/* <MainPage />
      <NewJournal />
      <PreviousJournals />
  <Forum /> */ }
    </div>
  );
}

export default App;
