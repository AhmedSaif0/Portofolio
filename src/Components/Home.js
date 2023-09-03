import React from 'react'
import '../Assets/Home.scss'
import Header from './Header'




const Home = () => {
  return (
    <div className='homepage mt-1'>
  <div className='overlay-container overlay-home'>
  <Header/>
    <h1>HI, I'M Ahmed Saif <br /> Web devloper</h1> <br />
    <button type="button" className="btn btn-outline-primary mt-1 mx-1">Download CV</button>
  </div>
  </div>

  )
}

export default Home
 