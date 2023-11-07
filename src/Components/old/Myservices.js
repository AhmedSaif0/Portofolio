import React from 'react'
import '../Assets/Services.scss'
import {BsLinkedin,BsGithub,BsShare } from 'react-icons/bs'
import { LiaLaptopCodeSolid} from 'react-icons/lia'
import { BiSupport} from 'react-icons/bi'

const Myservices = () => {
  return (
    <section className='myservices'>
    <div className="services container" id="services">
      <h2 className="main-title h2">Services</h2>
      <div className="container">

        <div className="box">
          <i><BiSupport/> </i>
          <h3>Maintenance and Support</h3>
          <div className="info">
            <a href="#">Details</a>
          </div>
        </div>


        <div className="box">
          <i className="fas" ><LiaLaptopCodeSolid /></i>
          <h3>Frontend Development</h3>
          <div className="info">
            <a href="#">Details</a>
          </div>
        </div>

        <div className="box">
          <i className="fas" ><BsShare/></i>
          <h3>Social Media Integration </h3>
          <div className="info">
            <a href="#">Details</a>
          </div>
        </div>

      </div>
    </div>
    </section>
  )
}

export default Myservices
