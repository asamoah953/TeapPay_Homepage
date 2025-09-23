import { MdPayment } from "react-icons/md";


function Withdrawal({ handleWithdrawal }) {
    return (
        <>
           
            <div className='withdrawal' onClick={()=>handleWithdrawal()}>
                <MdPayment className='withdrawal-icon' />
                <h3>Withdrawals</h3>
            </div>
            
        </>
    )
}

export default Withdrawal;