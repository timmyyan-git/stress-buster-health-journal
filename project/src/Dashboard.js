import React, {useState} from 'react'

function Dashboard ({onJournalList}){

    console.log(onJournalList)

    const journalSleepData = onJournalList.map((journal) => {
        return journal.sleep })
        
        console.log(journalSleepData)

    // const {sleep, exercise, greenSpace, social, mindful, nutrition, mentalHealth} = onPulledData

    //states to store dashboard data
    const [sleepData, setSleepData] = useState(0)
    const [natureData, setNatureData] = useState(0)
    const [exerciseData, setExerciseData] = useState(0)
    const [socialData, setSocialData] = useState(0)
    const [mindfulData, setMindfulData] = useState(0)
    const [nutritionData, setNutritionData] = useState(0)
    const [mentalData, setMentalData] = useState(0)
   
   
    // let sleepDash = journalSleepData.reduce((a, b) => a + b, 0) / journalSleepData.length

    // console.log(sleepDash)

    const arr = [1, 2, 3, 4, 5];
    const average = arr.reduce((a, b) => a + b, 0) / arr.length;

    console.log(average);


    // let sleepDash = setSleepData(average(sleepData, sleep))
    




    return (
        <div>
            <h3>Your <em>Stress Buster</em> Dashboard</h3>
            <p>Daily average of stress busting habits</p>
            <section className="health-snap">
                <section className="health-card">
                    <b>Nature</b>
                    <div>Time in Green Space: {natureData} mins</div>
                </section>
                <section className="health-card">
                    <b>Physical Activity</b>
                    <div>Time Spent Exercising: {exerciseData} mins</div>
                    {/* <div>Average Steps: {0}</div>   */}
                </section>
                <section className="health-card">
                    <b>Relationships</b>
                    {/* <div>Quality Time Spent: {0}</div> */}
                    <div>Number of Positive Social Connections: {socialData}</div>
                </section>
                <section className="health-card">
                    <b>Mindfulness</b>
                    {/* <div>Time Spent: {0} mins</div> */}
                    <div>Mindful Breaks Taken: {mindfulData}</div>
                </section>
                <section className="health-card">
                    <b>Balanced Nutrition </b>
                    {/* <div>Water Consumption: {0} L </div> */}
                    <div>Balanced Meal Rating: {nutritionData} / 10 </div>
                </section>
                <section className="health-card ">
                    <b>Sleep</b>
                    <div>Hours Slept: {sleepData}</div>
                    {/* <div>Quality of Sleep: {0} / 10</div> */}
                </section>
                <section className="health-card">
                    <b>Mental Healthcare</b>
                    <div>Media Consumption: {mentalData} mins</div>
                    {/* <div>Journal Completion: {0}</div> */}
                </section>
            </section>
        </div>
    )
}

export default Dashboard