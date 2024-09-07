import React from 'react'
import './Player.css'
import back_arrow_icon from '../../assets/back_arrow_icon.png'

const Player = () => {
  const key = "5OPShZJkJR8?si=-gGpogklRJoyhjVv"
  const BaseURL = 'https://www.youtube.com/embed/'
  const url = BaseURL + key

  return (
    <div className='player'>
      <img src={back_arrow_icon} />
      <iframe
        height={'90%'}
        width={'90%'}
        src={url}
        title='trailer'
        frameBorder={'0'}
        allowFullScreen={true}
      ></iframe>
      <div className="player-info">
        <p>Name</p>
        <p>Type</p>
      </div>

    </div>
  )
}

export default Player