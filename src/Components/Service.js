import React, { useState } from 'react'
import 'animate.css';
import '../Assets/Home.scss'
import '../Assets/Services.scss'
import { IoArrowBackOutline } from "react-icons/io5";
import serv from '../Assets/images/serv (1).jpg'
import social from '../Assets/images/social.jpg'
import support from '../Assets/images/support.jpg'

const Service = ({image,dis,title}) => {

  const [show, setShow] =useState(true)


    const showdiscrition = () => {
      setShow(!show)

    }
  
  return (
          <li>
                <div style={show ? {display:"inline"}: {display:"none"}}> 
                  <img src={image} alt=' '/>
                </div>
                  {  
                    show ? <div className='title_div flex'>
                              <strong className='title flex'>
                                <span> {title} </span>
                                <button className='btn' onClick={showdiscrition}>More</button>
                              </strong> 
                           </div>
                      :
                          <div className='services-dis' >
                            <p>{dis} </p>
                            <button className='btn' onClick={showdiscrition}> <IoArrowBackOutline/> </button>
                          </div>
                    }
          </li>
  )
}


export default Service
