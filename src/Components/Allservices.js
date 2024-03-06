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
        frontend :`I will create user interface and user experience for your
                websites and web applications using various web technologies to ensure 
                interactivity and visual appeal for users. I focus on enhancing the presentation
                layer of your digital platforms to deliver engaging and intuitive interfaces.`,

        social :`I will professionally create, set up,and optimize all your social media business accounts and pages.
                Create and set up all business accounts and pages.
                Professional, accurate & ensuring the best quality.
                Design professional cover and banner image.
                Attach & link up all business pages & media accounts.
                Website Integration & call to action button(CTA).
                Research hashtags & Keywords.
                Enlist all your details, Bio, and Info.
                Map and business location set up.
                Performing on almost every platform you want.`,
        support :`During my tenure as an IT support specialist,
                I adeptly troubleshooted and resolved a wide array of
                technical issues, including network-related concerns and 
                ICT equipment malfunctions. I consistently delivered precise
                and effective technical solutions, ensuring smooth operations 
                for end-users and stakeholders alike`,

        Service1 : "Frontend Developmen",
        Service2 : "Social Media Integration",
        Service3 : "Maintenance and Support",
      }


        const lines = sevicesDescription.social.split('\n');

            
        // Add a point before each line and join them with new lines
        const formattedText = lines.map(line => `• ${line}`).join('\n ');
        console.log(lines)

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