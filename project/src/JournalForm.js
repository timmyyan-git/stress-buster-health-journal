import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

function JournalForm({ onUpdateJournalList, onRandomQuote }) {
  const { author, content } = onRandomQuote;

  let quote = { content, author };

  let curr = new Date();
  curr.setDate(curr.getDate());
  let date = curr.toISOString().substring(0, 10);

  const [formData, setFormData] = useState({
    date: date,
    quote: {
      content: content,
      author: author,
    },
    journalWriting: "",
    sleep: "",
    exercise: "0",
    greenSpace: "0",
    social: "0",
    mindful: "0",
    nutrition: "0",
    mentalHealth: "0",
    therapy: "",
  });

  function onFormChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    fetch("http://localhost:3000/journals", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((updatedData) => {
        onUpdateJournalList(updatedData);
      });
    event.target.reset();
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
        id="journalDate"
          type="date"
          name="date"
          onChange={onFormChange}
          defaultValue={date}
        ></input>
        <input type="hidden" name="quote" defaultValue={quote}></input>
        <br></br>
        <label id="journalWritingLabel">Breathe in ... Let it out...</label>
        <br />
        <br />
        <div className="text-align-center">
          <textarea
            type="text"
            name="journalWriting"
            id="writing"
            rows="15"
            cols="100"
            onChange={onFormChange}
          />
        </div>
        <br></br>

        <div id="journalForm">
          <section className="question-snap">
            <div className="questions">
              <label htmlFor="type">How many hours did you sleep?</label>
              <br />
              <input
                type="number"
                id="time"
                step="1"
                min="0"
                max="24"
                name="sleep"
                onChange={onFormChange}
              ></input>
            </div>

        

            <div className="questions">
              <label htmlFor="type">Time in minutes spent exercising:</label>
              <br />
              <input
                type="number"
                min="0"
                id="type"
                name="exercise"
                onChange={onFormChange}
              ></input>
            </div>

          
            <div className="questions">
              <label htmlFor="type">
                Time in minutes spent in a green space:
              </label>
              <br />
              <input
                type="number"
                min="0"
                id="type"
                name="greenSpace"
                onChange={onFormChange}
              ></input>
            </div>

  

            <div className="questions">
              <label htmlFor="type">
                Number of positive social interactions:
              </label>
              <br />
              <input
                type="number"
                min="0"
                id="type"
                name="social"
                onChange={onFormChange}
              ></input>
            </div>

  

            <div className="questions">
              <label htmlFor="type">Number of mindful breaks:</label>
              <br />
              <input
                type="number"
                min="0"
                id="type"
                name="mindful"
                onChange={onFormChange}
              ></input>
            </div>

   

            <div className="questions">
              <label htmlFor="type">
                Reflect and rate how balanced your meals were today:
              </label>
              <br />
              <input
                type="number"
                min="0"
                max="10"
                id="type"
                name="nutrition"
                onChange={onFormChange}
              ></input>
            </div>

     

            <div className="questions">
              <label htmlFor="type">Total media consumption:</label>
              <br />
              <input
                type="number"
                min="0"
                id="type"
                name="mentalHealth"
                onChange={onFormChange}
              ></input>
            </div>

       

            <div className="questions">
              <label htmlFor="type">Did you attend therapy?</label>
              <br />
              <select id="type" name="therapy" onChange={onFormChange}>
                <option>Select an Option</option>
                <option>Yes</option>
                <option> No</option>
              </select>
            </div>
            
          </section>
          <div className="clr-blue text-align-center">
            <button id="journalButton"> Submit</button>
            </div>
        </div>
      
      </form>
    </div>
  );
}

export default JournalForm;
