import React from 'react'
import '../Assets/Projects.scss'
import '../Assets/Home.scss'
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
    href:"https://batterytest.netlify.app/"

  },
  {
    key:1,
    title: "Van life",
    description:"Car rental website",
    image : imag1 ,
    href:"https://vanlive.netlify.app"

  },
  {
    key:1,
    title: "Expenses Traker",
    description:"tool helps individuals monitor and manage their financial outflows by recording and categorizing expenditures.",
    image : imag ,
    href:"https://expensetracker90.netlify.app"

  }]

  return (
    <div className='proj-page ' id='projects'>
    <div className='light-right'></div>
    <div className='light-left'></div>
      <div className='porj-container container'>
        <div className='Side-Projects'><h2 className='h2'>Side Projects</h2></div>

      {
          projectData.map( (x) => (
            <Project key={x.key} 
                      title= {x.title}
                      description = {x.description}
                      image = {x.image}
                      href={x.href}
                    />

          ) )
        }

        </div>
      </div>
  )
}

export default Projects
