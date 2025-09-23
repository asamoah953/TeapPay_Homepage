import SideBar from "./components/sideBar";
import Header from "./components/header/headerContainer";
import DropMenu from "./components/header/dropMenu";
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

  return (
    <>
      <SideBar path={'#'} withdrawal={withdrawal} handleWithdrawal={handleWithdrawal} crypto={crypto} handleCryptoContainer={handleCryptoContainer}/>
      <Header handleDropDown={handleDropDown} />
      <DropMenu dropMenu={dropMenu} />

    </>
  )


}

export default App
