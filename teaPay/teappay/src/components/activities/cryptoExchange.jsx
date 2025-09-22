import { PiCrosshairSimple } from "react-icons/pi";
import { Link } from 'react-router-dom'

function cryptoExchange() {
    return (
        <>
           
           <div className='crypto-exchange'>
                <PiCrosshairSimple className='crypto-icon' />
                <h3>Crypto Exchange</h3>
            </div>
            
        </>
    )
}

export default cryptoExchange;