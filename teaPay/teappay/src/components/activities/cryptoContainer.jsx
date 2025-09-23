

function CryptoContainer({ crypto }) {

      


    return (
   
            <>
                {
                   crypto &&  <div className='cryptocontainer'>
                <h3 className="crypto">Exchange Crypto</h3>
                <h3 className="cryptolist">Crypto Exchange List</h3>
                
            </div>
                }
            </>
            
     
    )
}

export default CryptoContainer;