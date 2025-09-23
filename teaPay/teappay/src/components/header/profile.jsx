import { FcBusinesswoman } from "react-icons/fc";
import { SlArrowDown } from "react-icons/sl";




function Profile({ handleDropDown}){
    return(

        <div className="profile-container" onClick={()=>handleDropDown()}>

            <FcBusinesswoman className="image"/>
            <h3 className="name">Kyla Sarah</h3>
            <SlArrowDown className="dropdown"/>


        </div>
    )
}

export default Profile;