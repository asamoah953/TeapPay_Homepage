function ActivitiesContainer({ useractivity }) {
    return (
        <div className="activities-container" >

            {
                useractivity.map((user) => (
                    <div className="useractivity-container" key={user.key}>
                       <div className="virtual-withdraw">{user.activity}</div> 
                       <div className="usd-wallet">{user.wallet}</div> 
                       <div className="activity-date">{user.date}</div>
                       <div className="activity-time">{user.time}</div>
                       <div className="activity-amount">{user.amount}</div>
                       <div className="activity-arrow">{user.arrow}</div>
                       <div className="activity-status">{user.status}</div>
                       <div className="activity-updownarrow">{user.updownarrow}</div>
                        <div className="activity-image">{user.profile}</div>
                    </div>
                ))
            }


        </div>
    )
}

export default ActivitiesContainer;