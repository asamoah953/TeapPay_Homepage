import MenuProfile from "../menu/menuProfile";
import Viewprofile from "../menu/viewProfile";
import CheckWallet from "../menu/checkWallet";
import Verifications from "../menu/verifications";
import SharePayment from "../menu/sharePayMe";
import Logout from "../menu/Logout";

function DropMenu({ dropMenu }){
    return (

        
          <>              
                {
                    dropMenu &&  <div className="dropMenu" >
                        <MenuProfile />
                        <Viewprofile />
                        <CheckWallet />
                        <Verifications />
                        <SharePayment />
                        <hr className="line"></hr>
                        <Logout />
                        

                    </div>
                }
          </>     
        
    )
}


export default DropMenu;