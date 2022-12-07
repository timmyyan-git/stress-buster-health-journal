import React, { useState } from 'react';
import ReactDOM from 'react-dom';





function JournalForm (){


    function handleSubmit(event) {
        event.preventDefault()
        console.log(event.target.username.value)  
      }

    return (
        <div>
            <form onSubmit={handleSubmit}>
            <label htmlFor="type">How many hours did you sleep?</label>
            <select id="type">
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
            <select id="type">
             <option>Select an Option</option>
             <option>Yes</option>
            <option> No</option>
            </select>

                <br/>

            <label htmlFor="type">How much time did you spend in a green space?</label>
            <select id="type">
             <option>Select an Option</option>
             <option>0 Hours</option>
            <option> less than 30 mins </option>
            <option> more than 30 mins</option>
            </select>

            <br/>

            <label htmlFor="type">Did you have any positive social experiences?</label>
            <select id="type">
             <option>Select an Option</option>
             <option>Yes</option>
            <option> No</option>
            </select>
            
            <br/>

            <label htmlFor="type">Did you engage in any type of exercise?</label>
            <select id="type">
             <option>Select an Option</option>
             <option>Yes</option>
            <option> No</option>
            </select>

            <br/>

            <label htmlFor="type">Did you engage in any mindful practices?</label>
            <select id="type">
             <option>Select an Option</option>
             <option>Yes</option>
            <option> No</option>
            </select>

            <br/>

            <label htmlFor="type">Did you attend therapy?</label>
            <select id="type">
             <option>Select an Option</option>
             <option>Yes</option>
            <option> No</option>
            </select>
      </form>
        </div>
    )
}

export default JournalForm