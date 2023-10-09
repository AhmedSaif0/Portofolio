import React from 'react'
import '../Assets/Projects.scss'
import Project from './Project'
import imag from '../Assets/images/logo4.png'

const Projects = () => {

  const projectData = [ {
    key:1,
    title: "Project 1",
    description:"Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    image : imag ,

  },
  {
    key:1,
    title: "Project 1",
    description:"Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    image : imag ,

  },
  {
    key:1,
    title: "Project 1",
    description:"Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    image : imag ,

  }]

  return (
    <div className='proj-page'>
      <div className='container porj-container'>
        <div className='Side-Projects'><h2 className='h2'>Side Projects</h2></div>

      {
          projectData.map( (x) => (
            <Project key={x.key} 
                      title= {x.title}
                      description = {x.description}
                      image = {x.image}
                    />
          ) )
        }
<Project/>
<Project/>
<Project/>
        </div>
      </div>
  )
}

export default Projects
