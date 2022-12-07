import React, {useState, useEffect} from 'react'

function Dashboard ({onJournalList}){

    //pull key data from db.json and create array

    const journalSleepData = onJournalList.map((journal) => {
        return parseFloat(journal.sleep)})

    const journalNatureData = onJournalList.map((journal) => {
        return parseFloat(journal.greenSpace)})

    const journalExerciseData = onJournalList.map((journal) => {
        return parseFloat(journal.exercise)})

    const journalSocialData = onJournalList.map((journal) => {
        return parseFloat(journal.social)})
        
    const journalMindfulData = onJournalList.map((journal) => {
        return parseFloat(journal.mindful)}) 
        
    const journalNutritionData = onJournalList.map((journal) => {
        return parseFloat(journal.nutrition)})   
        
    const journalMentalData = onJournalList.map((journal) => {
        return parseFloat(journal.mentalHealth)})     
        
        console.log(journalMentalData)

    //states to store dashboard data
    const [sleepData, setSleepData] = useState(0)
    const [natureData, setNatureData] = useState(0)
    const [exerciseData, setExerciseData] = useState(0)
    const [socialData, setSocialData] = useState(0)
    const [mindfulData, setMindfulData] = useState(0)
    const [nutritionData, setNutritionData] = useState(0)
    const [mentalData, setMentalData] = useState(0)
   
   
    // update Dashboard

    useEffect(() => {
        setSleepData((journalSleepData.reduce((a, b) => a + b, 0) / journalSleepData.length))
    }, [])
    
    useEffect(() => {
        setNatureData((journalNatureData.reduce((a, b) => a + b, 0) / journalNatureData.length))
    }, [])

    useEffect(() => {
        setExerciseData((journalExerciseData.reduce((a, b) => a + b, 0) / journalExerciseData.length))
    }, [])

    useEffect(() => {
        setSocialData((journalSocialData.reduce((a, b) => a + b, 0) / journalSocialData.length))
    }, [])

    useEffect(() => {
        setMindfulData((journalMindfulData.reduce((a, b) => a + b, 0) / journalMindfulData.length))
    }, [])

    useEffect(() => {
        setNutritionData((journalNutritionData.reduce((a, b) => a + b, 0) / journalNutritionData.length))
    }, [])

    useEffect(() => {
        setMentalData((journalMentalData.reduce((a, b) => a + b, 0) / journalMentalData.length))
    }, [])


    return (
        <div>
            <h3>Your <em>Stress Buster</em> Dashboard</h3>
            <p>Daily average of stress busting habits</p>
            <section className="health-snap">
                <section className="health-card">
                    <b>Nature</b>
                    <div>Time in Green Space: {natureData.toFixed(1)} mins</div>
                </section>
                <section className="health-card">
                    <b>Physical Activity</b>
                    <div>Time Spent Exercising: {exerciseData.toFixed(1)} mins</div>
                    {/* <div>Average Steps: {0}</div>   */}
                </section>
                <section className="health-card">
                    <b>Relationships</b>
                    {/* <div>Quality Time Spent: {0}</div> */}
                    <div>Number of Positive Social Connections: {socialData.toFixed(1)}</div>
                </section>
                <section className="health-card">
                    <b>Mindfulness</b>
                    {/* <div>Time Spent: {0} mins</div> */}
                    <div>Mindful Breaks Taken: {mindfulData.toFixed(1)}</div>
                </section>
                <section className="health-card">
                    <b>Balanced Nutrition </b>
                    {/* <div>Water Consumption: {0} L </div> */}
                    <div>Balanced Meal Rating: {nutritionData.toFixed(1)} / 10 </div>
                </section>
                <section className="health-card ">
                    <b>Sleep</b>
                    <div>Hours Slept: {sleepData.toFixed(1)}</div>
                    {/* <div>Quality of Sleep: {0} / 10</div> */}
                </section>
                <section className="health-card">
                    <b>Mental Healthcare</b>
                    <div>Media Consumption: {mentalData.toFixed(1)} mins</div>
                    {/* <div>Journal Completion: {0}</div> */}
                </section>
            </section>
        </div>
    )
}

export default Dashboard