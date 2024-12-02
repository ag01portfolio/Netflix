import React, { useEffect, useState } from 'react'
import './TitleCards.css'
import card_data from '../../assets/cards/Cards_data'
// import abhi from '../../abhi.js'

function TitleCards({ title, category }) {
    const [apiData, setApiData] = useState([])
    const [movieName, setMovieName] = useState('');

    const getTile = title ? title : "Top on Netflix";

    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: abhi.movieToken
        }
    };


    const handleSearch = (movieName) => {
        console.log('=======>> handleSearch Abi')
        // const googleSearchUrl = `https://www.google.com/search?q=${movieName}`;
        // const youtubeSearchUrl = `https://www.youtube.com/results?search_query=${movieName}+trailer`;
        // const youtubeSearchUrl = `https://www.youtube.com/results?search_query=${movieName}+movie`;  // not working
        // const youtubeSearchUrl = ` https://www.mxplayer.in/movies?search=true&q=${movieName}`; // working
        // const youtubeSearchUrl = ` https://www.zee5.com/search?q=${movieName}`; // second best working
        // const youtubeSearchUrl = `https://tubitv.com/search/${movieName}`; // working ****
        const youtubeSearchUrl = ` https://fmovies-on.me/?s=${movieName}`; // the best one working

        window.open(youtubeSearchUrl, '_blank');
    }

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
                        <img src={`https://image.tmdb.org/t/p/w500/` + card.backdrop_path} alt="card_image"
                            onClick={() => {
                                handleSearch(card.original_title)
                                console.log("--- click")
                            }}
                        />
                        <p>{card.original_title}</p>

                    </div>
                })}
            </div>
        </div>
    )
}

export default TitleCards