import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';





function JournalForm ({onUpdateJournalList, onRandomQuote}){
    const {author, content} = onRandomQuote


    let quote = {content, author}

    let curr = new Date();
    curr.setDate(curr.getDate());
    let date = curr.toISOString().substring(0,10);

    const [formData, setFormData] = useState({
        date: date,
        quote: {
            content: content,
            author: author
        },
        journalWriting: "",
        sleep: "",
        exercise: "0",
        greenSpace: "0",
        social: "0",
        mindful: "0",
        nutrition: "0",
        mentalHealth: "0",
        therapy: ""
    })

    function onFormChange (e) {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }
            
            function handleSubmit(event) {
                event.preventDefault()
                fetch("http://localhost:3000/journals", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(formData)
                }) 
                    .then(response => response.json())
                    .then(updatedData => {
                        onUpdateJournalList(updatedData)
                    })
                event.target.reset()
            }
         
            return (
                <div>
            <form onSubmit={handleSubmit}>
            <input type="date" name="date" onChange={onFormChange}
            defaultValue={date}
            ></input>
            <input type="hidden" name="quote" defaultValue={quote}></input>
            <br></br>
            <label>Let it out...</label>
            <br/><br/>
            <textarea type="text" name="journalWriting" id="writing"  onChange= {onFormChange}/>
            <br></br>
            <label htmlFor="type">How many hours did you sleep?</label>
            <input type="number" id="time"  step="1" min="0" max="24"  name="sleep" onChange= {onFormChange}>
            </input>

               <br/>

            <label htmlFor="type">Time in minutes spent exercising:</label>
            <input type="number" min="0" id="type" name="exercise"  onChange= {onFormChange}>
            </input>

                <br/>

            <label htmlFor="type">Time in minutes spent in a green space:</label>
            <input type="number" min="0" id="type" name="greenSpace"  onChange= {onFormChange}>
            </input>

            <br/>

            <label htmlFor="type">Number of positive social interactions:</label>
            <input type="number" min="0" id="type" name="social"  onChange= {onFormChange}>
            </input>
        

            <br/>

            <label htmlFor="type">Number of mindful breaks:</label>
            <input type="number" min="0" id="type" name="mindful"  onChange= {onFormChange}>
            </input>

            <br/>

            <label htmlFor="type">Reflect and rate how balanced your meals were today:</label>
            <input type="number" min="0" max="10" id="type" name="nutrition"  onChange= {onFormChange}>
            </input>

            <br/>

            <label htmlFor="type">Total media consumption:</label>
            <input type="number" min="0" id="type" name="mentalHealth"  onChange= {onFormChange}>
            </input>

            <br/>

            <label htmlFor="type">Did you attend therapy?</label>
            <select id="type" name="therapy" onChange= {onFormChange}>
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