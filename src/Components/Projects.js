import React from 'react'
import '../Assets/Projects.scss'
import Project from './Project'
// import imag from '../Assets/images/bty.png'
// import imag1 from '../Assets/images/van.png'
// import imag2 from '../Assets/images/expenses.png'

import imag from '../Assets/images/Hand coding.gif'
import imag1 from '../Assets/images/Logoo.png'
import imag2 from '../Assets/images/background.jpg'
const Projects = () => {

  const projectData = [ {
    key:1,
    title: "Battery Test",
    description:"Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    image : imag ,

  },
  {
    key:1,
    title: "Van life",
    description:"Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    image : imag1 ,

  },
  {
    key:1,
    title: "Expenses Traker",
    description:"Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    image : imag2 ,

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
