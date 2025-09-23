
import { Link } from 'react-router-dom';
import Dashboard from './dashboard';
import Wallet from './wallet';
import Transactions from './activities/transactions';
import Deposit from './activities/deposits';
import SendMoney from './activities/sendmoney';
import ExchangeMoney from './activities/exchangeMoney';
import Withdrawal from './activities/withdrawal';
import { IoIosArrowDown } from "react-icons/io";
import CryptoExchange from './activities/cryptoExchange';
import RequestMoney from './activities/requestMoney';
import PaymentLinks from './activities/paymentLinks';
import Disputes from './others/disputes';
import Profile from './others/profile';
import Verification from './others/verification';
import WithdrawalContainer from './activities/withdrawalContainer';
import CryptoContainer from './activities/cryptoContainer';

function SideBar({ withdrawal,handleWithdrawal,crypto,handleCryptoContainer }){
    return(
        <>
          <div className='dashboard-container'>
           <div className='dashboard-header' style={{cursor:'pointer'}}>
            <img  className="ml-34 mt-20 pay-logo img-fluid" src="https://demo.paymoney.techvill.net/public/uploads/logos/1532175849_logo.png" alt="Pay Money"></img> 
        </div>
        <Dashboard />
        <Wallet/>
        <Transactions />
        <Deposit />
        <SendMoney />
        <RequestMoney />
        <ExchangeMoney />
        <div className='drop'> <Withdrawal handleWithdrawal={handleWithdrawal}/><IoIosArrowDown style={{position:'relative', left:'105px', top:'5px'}} onClick={()=>handleWithdrawal()}/></div>
        <WithdrawalContainer withdrawal={withdrawal}/>
        <div className='drop1' > <CryptoExchange handleCryptoContainer={handleCryptoContainer}/><IoIosArrowDown style={{position:'relative', left:'70px', top:'5px'}} onClick={()=>handleCryptoContainer()}/></div>
        <CryptoContainer crypto={crypto}/>
        <PaymentLinks />
        <Disputes />
        <Profile />
        <Verification />
        
       </div>
      
        </>
      
    )
}

export default SideBar;