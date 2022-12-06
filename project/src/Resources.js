import stressBuster from "./assets/stress-busters.png"

function Resources (){

    return (
        <div>
            <b><em>Resources</em></b>
            <a href="https://www.acesaware.org/wp-content/uploads/2020/12/Roadmap-For-Resilience_CA-Surgeon-Generals-Report-on-ACEs-Toxic-Stress-and-Health.pdf" 
            target="_blank">
                <img 
                src={stressBuster} 
                alt="Stress Busters" 
                id="resource-image">
                </img>
            </a>
        </div>
    )
}

export default Resources