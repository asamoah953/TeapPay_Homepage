import { PiCrosshairSimple } from "react-icons/pi";

function cryptoExchange({ handleCryptoContainer }) {
    return (
        <>
           
           <div className='crypto-exchange' onClick={()=>handleCryptoContainer()}>
                <PiCrosshairSimple className='crypto-icon' />
                <h3>Crypto Exchange</h3>
            </div>
            
        </>
    )
}

export default cryptoExchange;