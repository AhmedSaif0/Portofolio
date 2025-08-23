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
I’m a front-end developer with over 5 years of experience in the IT industry, passionate about building smooth, user-friendly websites. I love learning new tech, solving problems, and turning ideas into real, functional products that people enjoy using.
            </p>
        </div>
        <div className='details'>
          <ul>
                   {/* <li> <strong> <span> Age: </span> </strong> <span> 28 </span></li>*/}
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
