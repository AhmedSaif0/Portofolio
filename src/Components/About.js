import React from 'react'
import '../Assets/Home.scss'
import Photo from '../Assets/images/ahmed1.jpg'
import codesvg from '../Assets/images/Hand coding.gif'


const about = () => {
  return (
    <div className='container'>
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



          <img className="imagecode" src={codesvg} alt=''/>

        </div>

      </div>
    </div>
    </div>
  )
}

export default about
