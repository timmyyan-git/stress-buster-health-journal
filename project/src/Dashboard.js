import React, {useState, useEffect} from 'react'

function Dashboard ({onJournalList}){

    //pull key data from db.json and create array

    const journalSleepData = onJournalList.map((journal) => {
        return parseFloat(journal.sleep)})

    const sleepNum = journalSleepData.reduce((a, b) => a + b, 0) / journalSleepData.length

    const journalNatureData = onJournalList.map((journal) => {
        return parseFloat(journal.greenSpace)})

     const natureNum = journalNatureData.reduce((a, b) => a + b, 0) / journalNatureData.length

    const journalExerciseData = onJournalList.map((journal) => {
        return parseFloat(journal.exercise)})

    const exerciseNum = journalExerciseData.reduce((a, b) => a + b, 0) / journalExerciseData.length

    const journalSocialData = onJournalList.map((journal) => {
        return parseFloat(journal.social)})

    const socialNum = journalSocialData.reduce((a, b) => a + b, 0) / journalSocialData.length
        
    const journalMindfulData = onJournalList.map((journal) => {
        return parseFloat(journal.mindful)}) 

    const mindfulNum = journalMindfulData.reduce((a, b) => a + b, 0) / journalMindfulData.length
        
    const journalNutritionData = onJournalList.map((journal) => {
        return parseFloat(journal.nutrition)})   

    const nutritionNum = (journalNutritionData.reduce((a, b) => a + b, 0) / journalNutritionData.length)
        
    const journalMentalData = onJournalList.map((journal) => {
        return parseFloat(journal.mentalHealth)})     

    const mentalNum = (journalMentalData.reduce((a, b) => a + b, 0) / journalMentalData.length)

    
    

    return (
        <div>
            <section id="dashboard-title">
            <h2><b>Your </b><em id="sbDash">Stress Buster</em> <b>Dashboard</b></h2>
            <p>Daily Average of Stress Busting Habits</p>
            </section>
            <section className="health-snap">
                <section id="nature-card" className="health-card">
                    <b>Nature</b>
                    <div>Time in Green Space:
                        <div className="metric-container">{natureNum? natureNum.toFixed(1) : '\u231B'} mins</div> </div>
                </section>
                <section id="exercise-card"  className="health-card">
                    <b>Physical Activity</b>
                    <div>Time Spent Exercising: 
                        <div className="metric-container">{exerciseNum? exerciseNum.toFixed(1) : '\u231B'} mins</div></div>
                    {/* <div>Average Steps: {0}</div>   */}
                </section>
                <section id="relationship-card"   className="health-card">
                    <b>Relationships</b>
                    {/* <div>Quality Time Spent: {0}</div> */}
                    <div>Number of Positive Social Connections: 
                        <div className="metric-container">{socialNum? socialNum.toFixed(1) : '\u231B'}</div></div>
                </section>
                <section id="mindful-card" className="health-card">
                    <b>Mindfulness</b>
                    {/* <div>Time Spent: {0} mins</div> */}
                    <div>Mindful Breaks Taken: 
                    <div className="metric-container">{mindfulNum? mindfulNum.toFixed(1) : '\u231B'}</div></div>
                </section>
                <section id="nutrition-card" className="health-card">
                    <b>Balanced Nutrition </b>
                    {/* <div>Water Consumption: {0} L </div> */}
                    <div>Balanced Meal Rating: 
                    <div className="metric-container">{nutritionNum?nutritionNum.toFixed(1) : '\u231B'} / 10 </div></div>
                </section>
                <section id="sleep-card" className="health-card ">
                    <b>Sleep</b>
                    <div>Hours Slept: 
                    <div className="metric-container">{sleepNum? sleepNum.toFixed(1) : '\u231B'}</div></div>
                    {/* <div>Quality of Sleep: {0} / 10</div> */}
                </section>
                <section id="mental-card" className="health-card">
                    <b>Mental Healthcare</b>
                    <div>Media Consumption:
                    <div className="metric-container">{mentalNum? mentalNum.toFixed(1) : '\u231B'} mins</div> </div>
                    {/* <div>Journal Completion: {0}</div> */}
                </section>
            </section>
        </div>
    )
}

export default Dashboard