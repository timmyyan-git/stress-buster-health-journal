import Dashboard from "./Dashboard"
import Resources from "./Resources"
import RandomQuote from "./RandomQuote"


function MainPage ({onJournalList, onRandomQuote, onPulledData}){


    return (
        <>
        <h2 className="page-title">Home Page</h2>
        <div className="dashboard-container">
             <section className="resources-section">
                <Resources />
             </section>
             <section className="dashboard-section">
                <div className="dashboard">
                <Dashboard onJournalList={onJournalList} onPulledData={onPulledData} />
                </div>
                <div className="random-section">
                <RandomQuote onRandomQuote={onRandomQuote} />
                </div>
             </section>         

        </div>
        </>
    )
}

export default MainPage
