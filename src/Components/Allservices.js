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
        frontend: "I will create user interface and user experience for your websites and web applications using various web technologies to ensure interactivity and visual appeal for users. I focus on enhancing the presentation layer of your digital platforms to deliver engaging and intuitive interfaces.",
        social: "I will create user interface and user experience for your websites and web applications using various web technologies to ensure interactivity and visual appeal for users. I focus on enhancing the presentation layer of your digital platforms to deliver engaging and intuitive interfaces.",
        support: "I will create user interface and user experience for your websites and web applications using various web technologies to ensure interactivity and visual appeal for users. I focus on enhancing the presentation layer of your digital platforms to deliver engaging and intuitive interfaces.",
        Service1 : "Frontend Developmen",
        Service2 : "Social Media Integration",
        Service3 : "Maintenance and Support",
  
      }

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
                        dis={sevicesDescription.frontend}
                        title={sevicesDescription.Service2}
                />
                <Service image={support}
                        dis={sevicesDescription.frontend}
                        title={sevicesDescription.Service3}
                />
        </ul>
        </div>
    </div>
</section>    
    )
}

export default Allservices