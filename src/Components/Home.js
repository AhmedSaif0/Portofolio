import React from 'react'
import '../Assets/Home.scss'
import Header from './Header'
import Photo from '../Assets/images/ahmed1.jpg'




const Home = () => {
  return (
    
    <section className='homepage'>

    <div className='container'>
    <Header/>
    {/* <h1>HI, I'M Ahmed Saif <br /> Web devloper</h1> <br /> */}
    {/* <button type="button" className="btn btn-outline-primary mt-1 mx-1">Download CV</button> */}
    
    <div className='profile'>
      <div className='photo'><img src={Photo} alt='ahmedsaif'/></div>
      <div className='text'>
        <p className="hello">Hello, I'm</p>
          <h1 className="title">Ahmed Saif</h1>
          <h3>Web Developer </h3>
          <p className="section__text__p2">I will Turning your ideas into web realities with code.</p>
          <div className="btn-container">
            <button
              className=" btn btn-1"
              onclick="window.open('./assets/resume-example.pdf')"
            >
              Download CV
            </button>
            <button className=" btn btn-2" onclick="location.href='./#contact'">
              Contact Info
            </button>
            </div>
        </div>
    </div>
    </div>
  <div className='overlay-container overlay-home'></div>

  </section>

  )
}

export default Home
 