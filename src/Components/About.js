import React from 'react'
import '../Assets/About.scss'
import codesvg from '../Assets/images/Hand coding.gif'
import Photo from '../Assets/images/ahmed1.jpg'


const about = () => {
  return (
  <section className='about-section'>
    <div className='container'>
     <div className='right'>
       
        <div className='about-title'> 
          <h2 className='h2 about'>About Me</h2>
        </div>
        <div className='about-text'>
             <strong>Hello! I’m Ahmed Saifeldeen.</strong> <br />
              <p>
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

          <img className="imagecode" src={codesvg} alt=''/>

        </div>

    </div>
    </div>
  </section>
  )
}

export default about
