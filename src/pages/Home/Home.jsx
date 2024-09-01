import React from 'react'
import './Home.css'
import NavBar from '../../components/NavBar/NavBar'
import TitleCards from '../../components/TitleCards/TitleCards'
import hero_banner from '../../assets/hero_banner.jpg'
import hero_title from '../../assets/hero_title.png'
import info_ion from '../../assets/info_icon.png'
import play_ion from '../../assets/play_icon.png'
import Footer from '../../components/Footer/Footer'


function Home() {
  return (
    <div className='home'>
      <NavBar />
      <div className="hero">
        <img src={hero_banner} alt="" className='banner-image' />
        <div className="hero-caption">
          <img src={hero_title} alt="" className='caption-image' />
          <p>sdfsdfsfdfsdf sdffsd dsdffsdf sdf sd sdf sdf sdfdd</p>
          <div className="hero-button">
            <button> <img src={play_ion} alt="" className='btn hero-play-btn' />Play</button>
            <button> <img src={info_ion} alt="" className='btn hero-info-btn dark-btn' />More info</button>
          </div>
          <TitleCards />
        </div>
      </div>
      <div className="more_cards">
        <TitleCards title={"Blockbuster"} category={"top_rated"} />
        <TitleCards title={"Popular"} category={"popular"} />
        <TitleCards title={"Some other buster"} category={"now_playing"} />
        <TitleCards title={"Upcoming on Netflix"} category={"upcoming"} />
      </div>
      <Footer />
    </div>
  )
}

export default Home