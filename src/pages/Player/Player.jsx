import React, { useEffect, useState } from 'react'
import './Player.css'
import back_arrow_icon from '../../assets/back_arrow_icon.png'

const Player = () => {

  const [apiData, setApiData] = useState({
    name: '',
    key: '',
    published_at: '',
    typeof: ''
  })

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiYTJmNTRlMDVmNDJiNDQ2ODZmOGM1ZDRjNGM2MzI3OSIsIm5iZiI6MTcyNTgxNzI3OC4zNjA4NzksInN1YiI6IjY2ZDE0MTFiYjc0ZjAzZDE4ZTcwNmFiMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ePDIjkKvrCwSnz9JlnHWGpyZjMG1CVrrFEXKIFQLCz8'
    }
  };

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${apiData.id}/videos?language=en-US`, options)
      .then(response => response.json())
      .then(response => console.log("===> Player API data", response))
      // .then(response => setApiData(response.results[0]))
      .catch(err => console.error(err))
  }, [])

  return (
    <div className='player'>
      <img src={back_arrow_icon} />
      <iframe
        height={'90%'}
        width={'90%'}
        src={`https://www.youtube.com/embed/${apiData.key}`}
        title='trailer'
        frameBorder={'0'}
        allowFullScreen={true}
      ></iframe>
      <div className="player-info">
        <p>apiData.published_at</p>
        <p>apiData.name</p>
        <p>apiData.typeof</p>
      </div>

    </div>
  )
}

export default Player