import { BiWalletAlt } from "react-icons/bi";
import { MdArrowForwardIos } from "react-icons/md";




function AllWallet(){
    return(
        <div className="allwallet">
            <BiWalletAlt className="wallet"/>
            <h3 className="checkall">Check All</h3>
            <h3 className="balance">Wallet Balance</h3>
            <MdArrowForwardIos className="arrow"/>
        </div>
    )
}

export default AllWallet;