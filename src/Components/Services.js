import React from 'react'
import '../Assets/Home.scss'
import '../Assets/Services.scss'
import {BsLinkedin,BsGithub,BsShare } from 'react-icons/bs'
import { LiaLaptopCodeSolid} from 'react-icons/lia'
import { BiSupport} from 'react-icons/bi'
import serv from '../Assets/images/serv (1).jpg'

const Services = () => {
  return (
<section className='sevices '>    
    <div className='container serv-container flex'>
        <h2 className='h2 serv' >My Services</h2>
        <div className='My-Serv flex'>
          <ul className='flex'>
            <li> <div> <img src={serv} /> </div><div><strong> <span> Frontend Development </span> </strong> </div></li>
            <li> <div> <img src={serv} /> </div><div><strong> <span> Social Media Integration </span> </strong> </div></li>
            <li> <div> <img src={serv} /> </div><div><strong> <span> Maintenance and Support </span> </strong> </div></li>
          </ul>
        </div>
   
      
    </div>
</section>

  )
}

export default Services
