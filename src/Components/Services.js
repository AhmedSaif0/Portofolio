import React from 'react'
import '../Assets/Home.scss'
import '../Assets/Services.scss'
// import {BsLinkedin,BsGithub,BsShare } from 'react-icons/bs'
// import { LiaLaptopCodeSolid} from 'react-icons/lia'
// import { BiSupport} from 'react-icons/bi'
import serv from '../Assets/images/serv (1).jpg'
import social from '../Assets/images/social.jpg'
import support from '../Assets/images/support.jpg'

const Services = () => {
  return (
<section className='sevices container ' id='services'>    
    <div className='serv-container flex'>
        <h2 className='h2 serv' >My Services</h2>
        <div className='My-Serv flex'>
          <ul className='flex'>
            <li>
               <div> 
                <img src={serv} alt=''/>
              </div>
                <div className='strong flex'>
                  <strong className='flex'>
                     <span> Frontend Development </span>
                     <button className='btn'>More</button>
                  </strong> 
                </div>
            </li>
            
            <li> 
              <div> <img src={social} alt=''/> </div>
                <div className='strong flex'>
                <strong className='flex'>
                   <span> Social Media Integration </span>
                   <button className='btn'>More</button>
                </strong>
               </div>
            </li>

            <li>
              <div> <img src={support}alt='' /> </div>
               <div className='strong flex'>
                 <strong className='flex'> 
                  <span> Maintenance and Support </span>
                  <button className='btn'>More</button>
                 </strong> 
              </div>
              </li>
          </ul>
        </div>
    </div>
</section>

  )
}

export default Services
