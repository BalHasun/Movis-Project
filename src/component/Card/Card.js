
import Data from '../../assets/Data/Data.json'
import React from 'react'
import './Card.css'

const Card = () => {
    return (
        <div className="mainCard">
            <div className="cardImage">
                <ul className='cardItems'>
                    {Data.map(info =>
                        <li key={info.id} className='cardItem'>
                            <div className="cardTop">
                                <img src={info.image} alt={info.filmName}></img>
                            </div>
                            <div className="cardBotton">
                                <p>{info.filmName}</p>
                            </div>
                        </li>)}
                </ul>
            </div>
            <div className="cardInfo">
            </div>

        </div>
    )
}

export default Card