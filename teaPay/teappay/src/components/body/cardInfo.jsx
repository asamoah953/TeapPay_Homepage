import CardInfo from '/src/assets/front.PNG'


function Card() {
    return(
       <div className="card">
        <img src={CardInfo} alt="card info" className='cardimage'/>

       </div>
    )
}

export default Card;