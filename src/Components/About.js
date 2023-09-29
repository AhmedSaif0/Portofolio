import React from 'react'
import '../Assets/About.scss'
import '../Assets/Home.scss'

import {AiOutlineHtml5} from 'react-icons/ai'
import {LiaCss3} from 'react-icons/lia'
import {FaSass,FaReact} from 'react-icons/fa'
import {TbBrandJavascript} from 'react-icons/tb'

const About = () => {
  return (
    <div className='about-page'>
      <div className='container about-container'>
      <h2 className='h2'>My Skillsets</h2>
        <div className='My-skills'>
          <ul className='flex'>
            <li> <span> <AiOutlineHtml5 /> </span><br/><strong> <span> Html</span> </strong> </li>
            <li> <span> <LiaCss3/> </span><br/><strong> <span> Css </span> </strong> </li>
            <li> <span> <FaSass/> </span><br/><strong> <span> Sass </span> </strong> </li>
            <li> <span> <TbBrandJavascript/> </span><br/><strong> <span> Javascript </span> </strong> </li>
            <li> <span> <FaReact/> </span><br/><strong> <span> React js </span> </strong> </li>
          </ul>
        </div>

      </div>
    </div>
  )
}

export default About
