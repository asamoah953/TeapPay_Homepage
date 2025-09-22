
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
import Header from './header/headerContainer';

function SideBar(){
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
        <div className='drop'> <Withdrawal /><IoIosArrowDown style={{position:'relative', left:'105px', top:'5px'}} onClick={(e)=>''}/></div>
        <div className='drop1'> <CryptoExchange /><IoIosArrowDown style={{position:'relative', left:'70px', top:'5px'}} onClick={(e)=>''}/></div>
        <PaymentLinks />
        <Disputes />
        <Profile />
        <Verification />
        
       </div>
       <Header />
        </>
      
    )
}

export default SideBar;