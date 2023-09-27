import React from 'react'
import '../Assets/About.scss'

const About = () => {
  return (
    <div className='aboutpage'>
      <div className='container'>
      <div className='right'>
        <h2 className='h2 about'>About Me</h2>
        <div className='about-text'>
              <p>
                <strong>Hello! I’m Ahmed Saifeldeen.</strong> <br />
                Web designer from Sudan,. I have rich experience in
                  web site design and building, also I am good at wordpress. 
                  I love to talk with you about my unique.
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

        <h2 className='h2 serv' >My Services</h2>
        <div className='My-Serv flex'>
       
          <ul className='flex'>
            <li> <span> <LiaLaptopCodeSolid /> </span><br/><strong> <span> Frontend Development </span> </strong> </li>
            <li> <span> <BsShare/> </span><br/><strong> <span> Social Media Integration </span> </strong> </li>
            <li> <span> <BiSupport/> </span><br/><strong> <span> Maintenance and Support </span> </strong> </li>
          </ul>
   

        </div>
      </div>
      
      </div>
    </div>
  )
}

export default About
