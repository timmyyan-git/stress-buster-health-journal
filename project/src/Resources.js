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
            {/* <br></br> */}
            <p><em>Professional or Community Resources</em></p>
            <p>Get Local Referrals: </p>
            <a href="tel:+1-800-662-4357">
                <button id="samhsa-button">SAMHSA's National Helpline</button>    
            </a>
            <p>Help is Always Available:</p>
            <a href="tel:988">
            <button id="crisis-button">988 Suicide & Crisis Lifeline</button>
            </a>

        </div>
    )
}

export default Resources