import React from 'react'
import '../Assets/Home.scss'
import '../Assets/Services.scss'
import {BsLinkedin,BsGithub,BsShare } from 'react-icons/bs'
import { LiaLaptopCodeSolid} from 'react-icons/lia'
import { BiSupport} from 'react-icons/bi'

const Services = () => {
  return (
    <div className='container serv-container'>

        <h2 className='h2 serv' >My Services</h2>
        <div className='My-Serv flex'>
          <ul className='flex'>
            <li> <span> <LiaLaptopCodeSolid /> </span><br/><strong> <span> Frontend Development </span> </strong> </li>
            <li> <span> <BsShare/> </span><br/><strong> <span> Social Media Integration </span> </strong> </li>
            <li> <span> <BiSupport/> </span><br/><strong> <span> Maintenance and Support </span> </strong> </li>
          </ul>
        </div>
   
      
    </div>
  )
}

export default Services
