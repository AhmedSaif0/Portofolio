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

  <div className='container'>

  <div className='profile'>
    <div className='photo radius'><img className='my-img' src={Photo} alt='ahmedsaif'/>
    <div className='text'>
      <p className="hello"></p>
        <h1 className="title">Ahmed Saif</h1>
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
    <div className='right'>
      <div className='container'>
      <h2 className='h2 about'>About Me</h2>
      <div className='about-text'>
            <p>
              <strong>Hello! I’m Ahmed Saifeldeen.</strong> <br />
              a self-taught passionate FrontEnd developer from Sudan, currently working at Palmtree Computers as a FrontEnd engineer. I've been building stuff on the web since when I was in 6th standard, I've made countless side projects
          </p>
      </div>

      <div className='details'>
        <ul>
            <li> <strong> <span> Age: </span> </strong> <span> 28 </span></li>
            <li> <strong> <span> Residence: </span> </strong> <span> UAE </span></li>
            <li> <strong> <span> Freelance: </span> </strong> <span> Available </span></li>
            <li> <strong> <span> Address: </span> </strong> <span> Dubai, USA </span></li>
        </ul>
      </div>
      <div className='codesvg'>



        {/* <img  src={codesvg} alt=''/> */}

      </div>

      </div>
    </div>
  </div>
  </div>
  </section>

  )
}

export default Home
 