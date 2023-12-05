import React from 'react'
import '../Assets/Projects.scss'
import Project from './Project'
// import imag from '../Assets/images/bty.png'
// import imag1 from '../Assets/images/van.png'
// import imag2 from '../Assets/images/expenses.png'

import imag from '../Assets/images/expenses.png'
import imag1 from '../Assets/images/van.png'
import imag2 from '../Assets/images/bty.png'
const Projects = () => {

  const projectData = [ {
    key:1,
    title: "Battery Test",
    description:"web application tracking laptop battery discharging",
    image : imag2 ,

  },
  {
    key:1,
    title: "Van life",
    description:"Car rental website",
    image : imag1 ,

  },
  {
    key:1,
    title: "Expenses Traker",
    description:"tool helps individuals monitor and manage their financial outflows by recording and categorizing expenditures.",
    image : imag ,

  }]

  return (
    <div className='proj-page container'>
      <div className='porj-container'>
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


        </div>
      </div>
  )
}

export default Projects
