import React from 'react'
import FloatingDiv from '../FloatingDiv/FloatingDiv'
import './Intro.css'
import Github from '../../img/github.png'
import Instagram from '../../img/instagram.png'
import Facebook from '../../img/Facebook.png'
import Vector1 from '../../img/Vector1.png'
import Vector2 from '../../img/Vector2.png'
import boy from '../../img/boy.png'
import Thumbup from  '../../img/thumbup.png'
import Crown from '../../img/crown.png'
import Glassesimoji from '../../img/glassesimoji.png'


const Intro = () => {
  return (
    <div className="intro">
        <div className="i-left">
            <div className="i-name">
                <span>Hey! I'Am</span>
                <span>Santosh Patil</span>
                <span>Frontend Developer with 3+ years of experience in web design and development.</span>
            </div>
            <button className="button i-button">
                Hire Me
            </button>
            <div className="i-icons">
                <a href='#'>
                    <img src={Github} alt="github" ></img>
                </a>
                <a href='#'>
                    <img src={Instagram} alt="instagram" ></img>
                </a>
                <a href='#'>
                    <img src={Facebook} alt="facebook" ></img>
                </a>
                
            </div>

        </div>
        <div className="i-right">
            <img src={Vector1} alt='' />
            <img src={Vector2} alt='' />
            <img src={boy} alt='' />
            <div>
                <FloatingDiv image="Crown"/>
            </div>
        </div>
    </div>
  )
}

export default Intro
