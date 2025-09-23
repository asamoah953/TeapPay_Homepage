

function WithdrawalContainer({ withdrawal }) {

      


    return (
   
            <>
                {
                    withdrawal && <div className='withdrawalcontainer'>
                <h3 className="withdrawmoney">Withdraw Money</h3>
                <h3 className="withdrawlist">Withdraw List</h3>
                <h3 className="withdrawsettings">Withdraw Settings</h3>
            </div>
                }
            </>
            
     
    )
}

export default WithdrawalContainer;