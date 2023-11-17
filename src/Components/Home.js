import React from 'react'
import '../Assets/Home.scss'
import Photo from '../Assets/images/ahmed1.jpg'
import codesvg from '../Assets/images/Hand coding.gif'
import {BsLinkedin,BsGithub,BsShare } from 'react-icons/bs'
import { LiaLaptopCodeSolid} from 'react-icons/lia'
import { BiSupport} from 'react-icons/bi'
// import { IoShareSocialOutline} from 'react-icons/io'
import Particals from './Particals'




const Home = () => {
  return (
    
  <section className='homepage '>
    {/* {<Particals />} */}
    <div className='light-right'></div>
    <div className='light-left'></div>

  <div className='container'>

  <div className='profile'>
      <div className='photo radius'><img className='my-img' src={Photo} alt='ahmedsaif'/>
      <div className='text'>
        <p className="hello">Hello, I’m</p>
          <h3 className="title">Ahmed Saif</h3>
          <h3>Web Developer </h3>
          <div className="socials">
            <ul >
            <li><a href="#"><BsLinkedin/></a></li>
            <li><a href="#"><BsGithub/></a></li>
            </ul>
          </div>
          <div className="btn-container">
            <button
              className=" btn btn-1"
              onclick="window.open('./assets/resume-example.pdf')"
            >
              Download CV
            </button>
            <button className=" btn btn-2" onclick="location.href='./#contact'">
              Contact me
            </button>
            </div>
        </div>
      </div>
{/*  */}
  </div>
  </div>
  </section>

  )
}

export default Home
 