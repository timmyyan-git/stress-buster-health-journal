function Dashboard (){

    return (
        <div>
            <h3>Your <em>Stress Buster</em> Dashboard</h3>
            <p>Daily average of stress busting habits</p>
            <section className="health-snap">
                <section className="health-card">
                    <b>Nature</b>
                    <div>Time in Nature: {0} mins</div>
                </section>
                <section className="health-card">
                    <b>Physical Activity</b>
                    <div>Time Spent: {0} mins</div>
                    <div>Average Steps: {0}</div>  
                </section>
                <section className="health-card">
                    <b>Relationships</b>
                    <div>Quality Time Spent: {0}</div>
                    <div>Positive Social Connections: {0}</div>
                </section>
                <section className="health-card">
                    <b>Mindfulness</b>
                    <div>Time Spent: {0} mins</div>
                    <div>Mindful Breaks Taken: {0}</div>
                </section>
                <section className="health-card">
                    <b>Balanced Nutrition </b>
                    <div>Water Consumption: {0} L </div>
                    <div>Balanced Meal Rating: {0} / 10 </div>
                </section>
                <section className="health-card ">
                    <b>Sleep</b>
                    <div>Hours Slept: {0}</div>
                    <div>Quality of Sleep: {0} / 10</div>
                </section>
                <section className="health-card">
                    <b>Mental Healthcare</b>
                    <div>Media Consumption: {0} mins</div>
                    <div>Journal Completion: {0}</div>
                </section>
            </section>
        </div>
    )
}

export default Dashboard