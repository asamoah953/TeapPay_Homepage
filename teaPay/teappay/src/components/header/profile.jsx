import { FcBusinesswoman } from "react-icons/fc";
import { SlArrowDown } from "react-icons/sl";




function Profile({ handleDropDown}){
    return(

        <div className="profile-container" onClick={()=>handleDropDown()}>

            <img src="https://demo.paymoney.techvill.net/public/uploads/user-profile/1532333460.png" alt="Profile"  className="image"></img>
            <h3 className="name">Kyla Sarah</h3>
            <SlArrowDown className="dropdown"/>


        </div>
    )
}

export default Profile;

