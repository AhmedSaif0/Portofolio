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

  const projectData = [{
    id: 1,
    title: "Battery Test",
    description: "web application tracking laptop battery discharging",
    image: imag2,
    href: "https://btyapp.netlify.app",
    sourseCode: "https://github.com/AhmedSaif0/batteryTest45min.git",


  },
  {
    id: 2,
    title: "Van life",
    description: "Car rental website",
    image: imag1,
    href: "https://vanlive.netlify.app",
    sourseCode: "https://github.com/AhmedSaif0/Van-Life.git",

  },
  {
    id: 3,
    title: "Expenses Traker",
    description: "tool helps individuals monitor and manage their financial outflows by recording and categorizing expenditures.",
    image: imag,
    href: "https://ahmedsaif0.github.io/EXPENSE-TRACKER/",
    sourseCode: "https://github.com/AhmedSaif0/EXPENSE-TRACKER.git",

  },
  {
    id: 4,
    title: "Multi Vendor E-commerce",
    description: "A full-stack multi-vendor e-commerce platform for agricultural products. Currently in development with Next.js, Tailwind CSS, and modern best practices.",
    image: '../Assets/images/rahtak.png',
    href: "https://rahtak-farming.vercel.app/",
    sourseCode: " ",
  },
  {
    id: 5,
    title: "Worldwise",
    description: "A travel tracking app built with React that allows users to log, visualize, and organize their trips around the world. Features include interactive maps, location-based notes, and an intuitive UI.",
    image: "../Assets/images/Worldwise.png",
    href: "https://worldwise25.netlify.app",
    sourseCode: "https://github.com/AhmedSaif0/Worldwise_React_App",
  }]

  return (
    <div className='proj-page ' id='projects'>
      <div className='light-right'></div>
      <div className='light-left'></div>
      <div className='porj-container container'>
        <div className='Side-Projects'><h2 className='h2'>Side Projects</h2></div>

        {
          projectData.map((x) => (
            <Project key={x.id}
              title={x.title}
              description={x.description}
              image={x.image}
              href={x.href}
              sourseCode={x.sourseCode}
            />

          ))
        }

      </div>
    </div>
  )
}

export default Projects
