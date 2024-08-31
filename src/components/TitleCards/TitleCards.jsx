import React from 'react'
import './TitleCards.css'
import card_data from '../../assets/cards/Cards_data'

function TitleCards({ title, category }) {
    // let tileTitle = title ? title : "Top on Netflix"
    const tileTitle = title ? title : "Top on Netflix";

    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiYTJmNTRlMDVmNDJiNDQ2ODZmOGM1ZDRjNGM2MzI3OSIsIm5iZiI6MTcyNTExMDIzNy43NDQ1MTksInN1YiI6IjY2ZDE0MTFiYjc0ZjAzZDE4ZTcwNmFiMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.VvPNwsGuY1nB6OIK-xcCwpyxc3BAHqSEA6cWcSJCSBg'
        }
    };

    fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', options)
        .then(response => response.json())
        .then(response => console.log(response))
        .catch(err => console.error(err));


    return (
        <div className="title-card">
            <h2>{tileTitle}</h2>
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