import { BsQrCodeScan } from "react-icons/bs";




function SharePayment() {
    return (
        <>
           
            <div className='share-container'>
                <BsQrCodeScan className='share-icon' />
                <h3 className="share">Share Payment Request</h3>
            </div>
        </>
    )
}

export default SharePayment;