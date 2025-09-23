import Profile from "./profile";
import ScreenMode from "./screenMode";


function Header({ handleDropDown }){
    return(
        <div className="header-container">

            <Profile handleDropDown={handleDropDown}/>
            <ScreenMode />

        </div>
    )
}


export default Header;