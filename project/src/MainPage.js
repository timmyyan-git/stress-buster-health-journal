import Dashboard from "./Dashboard"
import Resources from "./Resources"
import RandomTips from "./RandomTips"


function MainPage (){

    return (
        <>
        <h2>Home Page</h2>
        <div className="dashboard-container">
             <section className="resources-section">
                <Resources />
             </section>
             <section className="dashboard-section">
                <div className="dashboard">
                <Dashboard />
                </div>
                <div className="random-section">
                <RandomTips />
                </div>
             </section>         

        </div>
        </>
    )
}

export default MainPage