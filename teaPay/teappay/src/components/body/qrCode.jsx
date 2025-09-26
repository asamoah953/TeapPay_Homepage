import { BsQrCode } from "react-icons/bs";
import { FaPrint } from "react-icons/fa";
import { FiEdit3 } from "react-icons/fi";
import { FaComments } from "react-icons/fa6";
import { HiArrowSmallRight } from "react-icons/hi2";





function QRCode() {
    return (
        <>
            <div className="qrcode-container">
                <h3 className="qrheader">Profile QR Code</h3>
                <FiEdit3 className="qrcode-edit" />
                <BsQrCode className="qrcode" />
                <h2 className="qrcode-instruction">Send or Receive <br /> Money</h2>
                <h3 className="qrcode-instruction2">Use your QR code to <br />easily to handle your <br />transactions.</h3>
                <button className="qrcode-button"><FaPrint /> Print Code</button>
            </div>
            <div className="customer-support">
                <h3 className="support">Contact Ticket Support</h3>
                <FaComments className="support-icon" />
                <h3 className="qrcode-instruction3">Create a ticket on the problem you are facing and <br/>our team will get back to you soon. Our dedicated support team is here to assist you every step of<br/> the way</h3>
                <button className="support-button">Create Ticket Now</button>
            </div>

            <h3 className="recent-activities">Recent Activities</h3>
            <h3 className="all-transaction">See All Transactions</h3>
            <HiArrowSmallRight className="right-arrow"/>

        </>

    )
}

export default QRCode;