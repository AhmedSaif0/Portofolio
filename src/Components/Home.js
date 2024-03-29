import React from 'react'
import '../Assets/Home.scss'
import Photo from '../Assets/images/ahmed1.jpg'
import {BsLinkedin,BsGithub,BsShare } from 'react-icons/bs'
import { LiaLaptopCodeSolid} from 'react-icons/lia'
import { BiSupport} from 'react-icons/bi'
// import { IoShareSocialOutline} from 'react-icons/io'
import Particlesbg from './libarareis/Particlesbg'



const Home = () => {
  return (
    
  <section className='homepage ' id='home'>
    {/* {<Particlesbg />} */}
    <div className='light-right'></div>
    <div className='light-left'></div>


  <div className='profile '>
      <div className='photo radius'><img className='my-img' src={Photo} alt='ahmedsaif'/>
      <div className='text'>
        <p className="hello">Hello, I’m</p>
          <h3 className="Name">Ahmed Saif</h3>
          <h3 className='title'>Web Developer </h3>
          <div className="socials">
            <ul >
            <li><a href="https://linkedin.com/in/ahmed-saif0"><BsLinkedin/></a></li>
            <li><a href="https://github.com/AhmedSaif0"><BsGithub/></a></li>
            </ul>
          </div>
          <div className="btn-container">
{/* 
            <button className="btn btn-1"
              onclick="window.open('./assets/resume-example.pdf')">
               Download CV
            </button> */}
            <button className="btn btn-2" onClick={ ()=> window.location.href = '#contact'}>
               Contact ME
            </button>

            </div>
        </div>
      </div>
{/*  */}
  </div>

  </section>

  )
}

export default Home
 