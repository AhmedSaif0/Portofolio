import React from 'react'
import '../Assets/Skills.scss'
import '../Assets/Home.scss'

import {AiOutlineHtml5} from 'react-icons/ai'
import {LiaCss3} from 'react-icons/lia'
import {FaSass,FaReact,FaGithub} from 'react-icons/fa'
import {TbBrandJavascript,TbBrandTypescript,TbBrandVite} from 'react-icons/tb'
import { RiBootstrapFill } from "react-icons/ri";
import { HiOutlineCommandLine } from "react-icons/hi2";




const Skills = () => {
  return (
    <div className='skills-page'>
      <div className='about-container flex'>
      <h2 className='h2'>My Skillsets</h2>
        <div className='My-skills flex container'>
          <ul className='flex'>
            <li> <span className='skill-icon-1'> <AiOutlineHtml5 /> </span><br/><strong> <span> Html</span> </strong> </li>
            <li> <span className='skill-icon-1'> <LiaCss3/> </span><br/><strong> <span> Css </span> </strong> </li>
            <li> <span className='skill-icon-1'> <FaSass/> </span><br/><strong> <span> Sass </span> </strong> </li>
            <li> <span className='skill-icon-1'><TbBrandJavascript/> </span><br/><strong> <span> Javascript </span> </strong> </li>
            <li> <span className='skill-icon-1'> <FaReact/> </span><br/><strong> <span> React js </span> </strong> </li>
          </ul>
          {/* neeeeeeed to repair this page  */}
          <ul className='flex'>
            <li> <span className='skill-icon-1'> 
              <RiBootstrapFill  style={{ color: '#8212f6' }} />
                </span><br/>
                <strong>
                  <span> bootstrap</span>
                </strong>
            </li>
            <li> <span className='skill-icon-1'> <TbBrandTypescript style={{ color: '#2f74c0' }} /> </span><br/><strong> <span>Typescript</span> </strong> </li>
            <li> <span className='skill-icon-1'> <FaGithub style={{ color: '#b965f4' }} /> </span><br/><strong> <span> GitHub </span> </strong> </li>
            <li> <span className='skill-icon-1'><TbBrandVite style={{ color: '#ffaf07' }} /> </span><br/><strong> <span> VITE </span> </strong> </li>
            <li> <span className='skill-icon-1'> <HiOutlineCommandLine style={{ color: '#fff' }} /> </span><br/><strong> <span> CLS </span> </strong> </li>

          </ul>
        </div>
      </div>
    </div>
  )
}

export default Skills
