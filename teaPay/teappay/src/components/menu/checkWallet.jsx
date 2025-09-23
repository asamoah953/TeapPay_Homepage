import { BiWalletAlt } from "react-icons/bi";




function CheckWallet() {
    return (
        <>
           
            <div className='checkwallet-container'>
                <BiWalletAlt className='checkwallet-icon' />
                <h3 className="checkwallet">Check Wallet</h3>
            </div>
        </>
    )
}

export default CheckWallet;