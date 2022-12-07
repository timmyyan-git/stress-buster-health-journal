import React, { useState } from 'react';
import ReactDOM from 'react-dom';





function JournalForm (){

    const [journalWriting, setJournalWriting] = useState ("")
    const [sleep, setSleep] = useState ("")
    const [exercise, setExercise] = useState ("")
    const [greenSpace, setGreenSpace] = useState ("")
    const [social, setSocial] = useState ("")
    const [mindful, setMindful] = useState ("")
    const [therapy, setTherapy] = useState ("")

    function handleSubmit(event) {
        event.preventDefault()
        console.log(event.target.username.value)  
      }

    return (
        <div>
            <div> 
            <label>Let it out...</label>
            <br/>
            <input type="text" id="writing"value={journalWriting} onChange= { e=> setJournalWriting(e.target.value)}/>

                <br/>
            </div>
            <form onSubmit={handleSubmit}>
            <label htmlFor="type">How many hours did you sleep?</label>
            <select id="type" value={sleep} onChange= {e => setSleep(e.target.value)}>
            <option>Select an Option</option>
             <option> 0 Hours</option>
             <option > 1 Hour</option>
             <option> 2 Hours</option>
             <option> 3 Hours</option>
             <option> 4 Hours</option>
             <option> 5 Hours</option>
             <option> 6 Hours</option>
             <option> 7 Hours</option>
             <option> 8 Hours</option>
             <option> 9+ Hours</option>
            </select>

               <br/>

            <label htmlFor="type">Did you engage in any type of exercise?</label>
            <select id="type" value= {exercise} onChange= {e =>setExercise(e.target.value)}>
             <option>Select an Option</option>
             <option>Yes</option>
            <option> No</option>
            </select>

                <br/>

            <label htmlFor="type">How much time did you spend in a green space?</label>
            <select id="type"value={greenSpace} onChange= {e => setGreenSpace(e.target.value)}>
             <option>Select an Option</option>
             <option>0 Hours</option>
            <option> less than 30 mins </option>
            <option> more than 30 mins</option>
            </select>

            <br/>

            <label htmlFor="type">Did you have any positive social experiences?</label>
            <select id="type" value={social} onChange= {e => setSocial(e.target.value)}>
             <option>Select an Option</option>
             <option>Yes</option>
            <option> No</option>
            </select>
        

            <br/>

            <label htmlFor="type">Did you engage in any mindful practices?</label>
            <select id="type"value={mindful} onChange = {e => setMindful(e.target.value)}>
             <option>Select an Option</option>
             <option>Yes</option>
            <option> No</option>
            </select>

            <br/>

            <label htmlFor="type">Did you attend therapy?</label>
            <select id="type"value= {therapy} onChange= {e => setTherapy(e.target.value)}>
             <option>Select an Option</option>
             <option>Yes</option>
            <option> No</option>
            </select>
       

       <br/>
       <br/>
            <button> submit</button>
      </form>
        </div>
    )
}

export default JournalForm