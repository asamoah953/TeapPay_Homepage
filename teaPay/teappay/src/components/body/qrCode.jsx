import { BsQrCode } from "react-icons/bs";
import { FaPrint } from "react-icons/fa";
import { FiEdit3 } from "react-icons/fi";





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
            <div className="qrcode-container2">
                <h3 className="qrheader"></h3>
                <BsQrCode className="qrcode" />
                <h3 className="qrcode-instruction2">Use your QR code to <br />easily to handle your <br />transactions.</h3>
                <button className="qrcode-button"><FaPrint /> Print Code</button>
            </div>
        </>

    )
}

export default QRCode;