import Service from "./Service"
import React, { useState } from 'react'
import 'animate.css';
import '../Assets/Home.scss'
import '../Assets/Services.scss'
import serv from '../Assets/images/serv (1).jpg'
import social from '../Assets/images/social.jpg'
import support from '../Assets/images/support.jpg'

const Allservices = ({image,dis,title}) =>{

    const sevicesDescription =  {
        frontend: `I design and build modern, responsive user interfaces using the latest web technologies. 
        My goal is to create visually appealing and intuitive experiences that engage users.`,
    
      social: `I’ll set up and optimize all your social media business accounts, design professional banners, 
        link everything properly, and ensure your profiles are ready for growth with the right keywords, 
        CTAs, and location info.`,
    
      support: `As an IT support specialist, I resolved network and hardware issues efficiently, 
        ensuring minimal downtime and smooth day-to-day operations for users and teams.`,
    
      Service1: "Frontend Development",
      Service2: "Social Media Integration",
      Service3: "Maintenance and Support",
      }


        const lines = sevicesDescription.social.split('\n');

            
        // Add a point before each line and join them with new lines
        const formattedText = lines.map(line => `• ${line}`).join('\n ');
     

return (
        <section className='sevices container ' id='services'>    
            <div className='serv-container flex'>
                <h2 className='h2 serv' >My Services</h2>
                <div className='My-Serv flex'>
                <ul className='flex'>
                        <Service image={serv}
                                dis={sevicesDescription.frontend}
                                title={sevicesDescription.Service1}
                        />
                        <Service image={social}
                                dis={lines}
                                title={sevicesDescription.Service2}
                        />
                        <Service image={support}
                                dis={sevicesDescription.support}
                                title={sevicesDescription.Service3}
                        />
                </ul>
                </div>
            </div>
        </section>    
    )
}

export default Allservices