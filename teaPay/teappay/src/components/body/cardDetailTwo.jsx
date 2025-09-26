import { TbCreditCardRefund } from "react-icons/tb";
import { TbCreditCardPay } from "react-icons/tb";


function CardDetailTwo() {
    return (
        <div className="carddetail">
            <h4 className="totalbalance">Total amount </h4>
            <h2 className="cardamount">$ 300</h2>
            <h3 className="cardtype">Card Type</h3>
            <h3 className="virtualcard">Virtual</h3>
            <h2 className="currency">Currency</h2>
            <h3 className="dollaramount">USD</h3>
            <h2 className="classStatus">Status</h2>
            <h4 className="activeCard">Active</h4>
            <div className="topup-container"> 
                <TbCreditCardRefund className="topup-icon" />
                <h5 className="top-up">Topup</h5>
            </div>
            <div> 
                <TbCreditCardPay className="topup-icon" />
                <h5 className="top-up">withdraw</h5>
            </div>


        </div>
    )
}

export default CardDetailTwo;