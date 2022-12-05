import React from "react"
import Header from "./Header"
import MainPage from "./MainPage"
import NewJournal from "./NewJournal"
import PreviousJournals from "./PreviousJournals"
import Forum from "./Forum"

function App() {
  return (
    <div>
      <b>HELLO from App!</b>
      <Header />
      <MainPage />
      <NewJournal />
      <PreviousJournals />
      <Forum />
    </div>
  );
}

export default App;
