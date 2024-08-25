import React from 'react'
import './TitleCards.css'
import card_data from '../../assets/cards/Cards_data'

function TitleCards() {
    return (
        <div className="title-card">
            <h2>Popular on Netflix</h2>
            <div className="card-list">
                {card_data.map((card, index) => {
                    return <div className="card" key={index}>
                        <img src={card.image} alt="card_image" />
                        {/* <p>{card.name}</p> */}
                    </div>
                })}
            </div>
        </div>
    )
}

export default TitleCards