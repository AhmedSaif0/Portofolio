import React from 'react'
import { BiSupport} from 'react-icons/bi'
import '../Assets/Project.scss'
import '../Assets/Services.scss'


const Project = ({id,image,title,description,href,sourseCode}) => {
  return (
        <div className='project_card' key={id}>
      
                {<img className='pro-img' src={image} alt='project'/> || 
                
                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M20 5H4V19L13.2923 9.70649C13.6828 9.31595 14.3159 9.31591 14.7065 9.70641L20 15.0104V5ZM2 3.9934C2 3.44476 2.45531 3 2.9918 3H21.0082C21.556 3 22 3.44495 22 3.9934V20.0066C22 20.5552 21.5447 21 21.0082 21H2.9918C2.44405 21 2 20.5551 2 20.0066V3.9934ZM8 11C6.89543 11 6 10.1046 6 9C6 7.89543 6.89543 7 8 7C9.10457 7 10 7.89543 10 9C10 10.1046 9.10457 11 8 11Z"></path></svg>
                
                }
                
                <div className="card__content">
                    <p className="card__title">{title}</p>
                    <p className="card__description">{description}</p>
                    <div className='card_btn_container'>
                      <button className="card__button" >
                        <a href={href} target="_blank" style={{textDecoration:"none"}}>Live Demo</a>
                      </button>
                      <button href={sourseCode} className="card__button secondary">Source Code</button>
                    </div>

                </div>
        </div>

  )
}

export default Project

