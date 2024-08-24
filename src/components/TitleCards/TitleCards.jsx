import React from 'react'
import './TitleCards'
import CardData from '../../assets/cards/Cards_data'

function TitleCards() {
    return (
        <div className="title-card">
            <h2>Popular on Netflix</h2>
            <div className="card_list">
                {CardData.map((card, index) => {
                    return <div className="card">
                        <img src={card.image} />
                        <p>{card.name}</p>
                    </div>
                })}
            </div>
        </div>
    )
}

export default TitleCards