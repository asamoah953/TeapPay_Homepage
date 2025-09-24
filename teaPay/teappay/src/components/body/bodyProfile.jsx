import { FcBusinesswoman } from "react-icons/fc";
import { FiEdit3 } from "react-icons/fi";



function BodyProfile() {
    return (
        <div className="bodyprofile-container">
            <img src="https://demo.paymoney.techvill.net/public/uploads/user-profile/1532333460.png" alt="Profile"  className="bodyprofile"></img>
            <h3 className="bodyprofile-name">Kyla Sarah</h3>
            <FiEdit3 className="edit"/>
            <h3 className="salutation">Welcome, here is a brief summary of your account</h3>

        </div>
    )
}


export default BodyProfile;