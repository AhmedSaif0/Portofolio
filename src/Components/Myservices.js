import React from 'react'
import '../Assets/Services.scss'
import {BsLinkedin,BsGithub,BsShare } from 'react-icons/bs'
import { LiaLaptopCodeSolid} from 'react-icons/lia'
import { BiSupport} from 'react-icons/bi'

const Myservices = () => {
  return (

    <>
    {/* Start Services */}
    <div className="services container" id="services">
      <h2 className="main-title h2">Services</h2>
      <div className="container">
        <div className="box">
          <i><BsShare/></i>
          <h3>Security</h3>
          <div className="info">
            <a href="#">Details</a>
          </div>
        </div>
        <div className="box">
          <i className="fas" ><BsShare/></i>
          <h3>Fixing Issues</h3>
          <div className="info">
            <a href="#">Details</a>
          </div>
        </div>
        <div className="box">
          <i className="fas fa-map-marked-alt fa-4x" />
          <h3>Location</h3>
          <div className="info">
            <a href="#">Details</a>
          </div>
        </div>
        <div className="box">
          <i className="fas fa-laptop-code fa-4x" />
          <h3>Coding</h3>
          <div className="info">
            <a href="#">Details</a>
          </div>
        </div>
        <div className="box">
          <i className="fas fa-palette fa-4x" />
          <h3>Security</h3>
          <div className="info">
            <a href="#">Design</a>
          </div>
        </div>

      </div>
    </div>
  </>
  )
}

export default Myservices
