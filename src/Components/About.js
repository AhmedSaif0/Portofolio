import React from 'react'
import '../Assets/About.scss'
import codesvg from '../Assets/images/Hand coding.gif'
import Photo from '../Assets/images/ahmed1.jpg'


const about = () => {
  return (
  <section className='about-section container' id='about'>
     <div className='right'>
        <div className='about-title'> 
          <h2 className='h2 about'>About Me</h2>
        </div>
        <div className='about-text'>
             <strong>I’m Ahmed Saifeldeen.</strong> <br />
              <p>
                I've made the transition from a civil engineering background to a career in web development, 
                specializing in front-end development. This professional pivot has been a great journey,
                reflecting my determination to embrace change, learn new skills,
                and navigate the dynamic landscape of technology.
                With a foundation in civil engineering, I bring a unique perspective to problem-solving in web development. 
                This narrative underscores the versatility and adaptability required to
                reshape my career path and thrive as a front-end developer.
            </p>
        </div>
        <div className='details'>
          <ul>
              <li> <strong> <span> Age: </span> </strong> <span> 28 </span></li>
              <li> <strong> <span> Residence: </span> </strong> <span> UAE </span></li>
              <li> <strong> <span> Freelance: </span> </strong> <span> Available </span></li>
              <li> <strong> <span> Address: </span> </strong> <span> Dubai, UAE </span></li>
          </ul>
        </div>
         {/* <div className='codesvg'>
          <img className="imagecode" src={codesvg} alt=''/>
         </div> */}
    </div>
  </section>
  )
}

export default about
