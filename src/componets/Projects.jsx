import React from 'react'
import "./Projects.css"
import GammaChat from "../assets/GammaChat.png";
import CryptoGamma from "../assets/CryptoGamma.png";
import GamaStore from "../assets/GamaStore.png";

const Projects = () => {
  return (
    <div className="project">

          
        <div class="about__content">
            <div class="about__cards">
                <article class="about__card">
                    <div className='about__icon' />
                    <img src={GammaChat}  />
                      <p>Gamma Chat</p>
                      <small>
                          
                      </small>
                
                </article>
                <article class="about__card">
                    <div className='about__icon' />
                    <img src={GamaStore}  />
                    <p>E-commerce</p>
                    <small></small>
                </article>
                <article class="about__card">
                    <div className='about__icon' />
                    <img src={CryptoGamma}  />
                    <p>CryptoGamma</p>
                    <small></small>
                </article>
                <article class="about__card">
                    <div className='about__icon' />
                    <p>Experience</p>
                    <small></small>
                </article>
            </div>
        </div>
              
          
    </div>
  )
}

export default Projects