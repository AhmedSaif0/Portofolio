import React from 'react'
import '../Assets/Home.scss'
import Header from './Header'
import Photo from '../Assets/images/ahmed1.jpg'




const Home = () => {
  return (
    <section className='homepage mt-1'>
  <div className='overlay-container overlay-home'>
    <div className='container'>
    <Header/>
    {/* <h1>HI, I'M Ahmed Saif <br /> Web devloper</h1> <br /> */}
    {/* <button type="button" className="btn btn-outline-primary mt-1 mx-1">Download CV</button> */}
    
    <div className='profile'>
      <div className='photo'><img src={Photo} alt='ahmedsaif'/></div>
      <div className='text'>
        <p className="hello">Hello, I'm</p>
          <h1 className="title">Ahmed Saif</h1>
          <p className="section__text__p2">Frontend Developer</p>
          <div className="btn-container">
            <button
              className="btn-1"
              onclick="window.open('./assets/resume-example.pdf')"
            >
              Download CV
            </button>
            <button className="btn-2" onclick="location.href='./#contact'">
              Contact Info
            </button>
            </div>
        </div>
    </div>
    </div>
  </div>
  </section>

  )
}

export default Home
 