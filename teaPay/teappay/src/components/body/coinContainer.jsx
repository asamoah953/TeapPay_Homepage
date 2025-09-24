function CoinContainer({ coinInfoObject }) {


    return (
        <>
            <div className="coin-grid">
                {coinInfoObject.map((coin) => (
                    <div className="coincontainer" key={coin.key}>
                        <div className="coin">
                            {coin.coin}
                        </div>
                        {coin.logo}
                        <div className="coinname">
                            {coin.name}
                        </div>
                        <div className="amount">{coin.amount}</div>
                    </div>
                ))}
            </div>


        </>
    )
}

export default CoinContainer;