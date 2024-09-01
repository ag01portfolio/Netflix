import React, { useEffect, useState } from 'react'
import './TitleCards.css'
import card_data from '../../assets/cards/Cards_data'

function TitleCards({ title, category }) {
    // let getTile = title ? title : "Top on Netflix"
    const [apiData, setApiData] = useState([])
    const getTile = title ? title : "Top on Netflix";
    // const getCategory = category ? category : "now_playing"

    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiYTJmNTRlMDVmNDJiNDQ2ODZmOGM1ZDRjNGM2MzI3OSIsIm5iZiI6MTcyNTExMDIzNy43NDQ1MTksInN1YiI6IjY2ZDE0MTFiYjc0ZjAzZDE4ZTcwNmFiMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.VvPNwsGuY1nB6OIK-xcCwpyxc3BAHqSEA6cWcSJCSBg'
        }
    };

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${category ? category : "now_playing"}?language=en-US&page=1?include_adult=true`, options)
            .then(response => response.json())
            // .then(response => console.log("===>>", response))
            .then(response => setApiData(response?.results))
            .catch(err => console.error(err));

    }, [])

    return (
        <div className="title-card">
            <h2>{getTile}</h2>
            <div className="card-list">
                {apiData.map((card, index) => {
                    // console.log("======>> API data insede map apiData", apiData)
                    return <div className="card" key={index}>
                        <img src={`https://image.tmdb.org/t/p/w500/` + card.backdrop_path} alt="card_image" />
                        <p>{card.original_title}</p>
                    </div>
                })}
            </div>
        </div>
    )
}

export default TitleCards