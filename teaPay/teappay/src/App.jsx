import SideBar from "./components/sideBar";
import Header from "./components/header/headerContainer";
import DropMenu from "./components/header/dropMenu";
import BodyProfile from "./components/body/bodyProfile";
import DepositButton from "./components/body/depositButton";
import WithdrawButton from "./components/body/withdrawMoneyButton";
import CoinContainer from "./components/body/coinContainer";
import { FaBitcoin } from "react-icons/fa";
import { SiLitecoin } from "react-icons/si";
import { AiFillEuroCircle } from "react-icons/ai";
import { FaPoundSign } from "react-icons/fa";
import AllWallet from "./components/body/allWallet";
import Card from "./components/body/cardInfo";
import CardDetail from "./components/body/cardDetails";
import CardDetailTwo from "./components/body/cardDetailTwo";
import QRCode from "./components/body/qrCode";




import { useState } from "react";

function App() {

  const [dropMenu, setDropMenu] = useState(false);
  const [withdrawal, setWithdrawal] = useState(false);
  const [crypto, setCrypto] = useState(false);


  function handleCryptoContainer(){
    setCrypto(prev => !prev)
  }



  function handleWithdrawal() {
    setWithdrawal(prev => !prev)
  }

  function handleDropDown() {
    setDropMenu(prev => !prev);
  }

  const coinInfoObject = [
    {coin:"BTC", name:"Crypto Asset",amount:0, logo:<FaBitcoin className="BTC"/>, key:1},
    {coin:"TRXTEST", name:"Crypto Asset",amount:0, logo:<img src="https://demo.paymoney.techvill.net/public/uploads/currency_logos/tron.png" alt="Currency" className="BTCD"></img>,key:2},
    {coin:"LTCTEST", name:"Crypto Asset",amount:0.00228403, logo:<SiLitecoin className="BTC" style={{color:"gray"}}/>,key:3},
    {coin:"DOGETEST", name:"Crypto Asset",amount:4.74192582, logo:<img src="https://demo.paymoney.techvill.net/public/uploads/currency_logos/1671523566.png" alt="Currency" className="BTCD"></img>,key:4},
    {coin:"USDT", name:"Crypto",amount:111.0302, logo:<img src="https://demo.paymoney.techvill.net/public/uploads/currency_logos/tether.png" alt="Currency" className="BTCD"/>,key:5},
    {coin:"EUR", name:"fiat",amount:0, logo:<AiFillEuroCircle className="BTC" style={{color:'#0066AA'}}/>,key:6},
    {coin:"GBP", name:"fiat",amount:19847, logo:<FaPoundSign className="BTC"  style={{color:"gray", backgroundColor:"#4153B5", borderRadius:"20px", fontSize:"37", padding:"4px", color:"white"}}/>,key:7},
    {coin:"USD", name:"fiat",amount:49944.53, logo:<img src="https://demo.paymoney.techvill.net/public/uploads/currency_logos/icons8-us-dollar-64.png" alt="Currency" className="BTCD"></img>,key:8},

  ]

  return (
    <>
      <SideBar path={'#'} withdrawal={withdrawal} handleWithdrawal={handleWithdrawal} crypto={crypto} handleCryptoContainer={handleCryptoContainer}/>
      <Header handleDropDown={handleDropDown} />
      <DropMenu dropMenu={dropMenu} />
      <BodyProfile />
      <DepositButton />
      <WithdrawButton />
      <CoinContainer coinInfoObject={coinInfoObject}/>
      <AllWallet />
      <Card />
      <CardDetail />
      <CardDetailTwo />
      <QRCode />

    </>
  )


}

export default App
