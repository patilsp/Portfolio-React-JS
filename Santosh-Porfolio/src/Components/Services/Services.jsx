import React from 'react'
import './Services.css'
import HeartEmoji from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png";



const Services = ({Card}) => {
  return (
   <div className='services'>
    {/* left side */}
        <div className='awesome'>
            <span>My Awesome</span>
            <span>Services</span>
            <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. A accusantium, assumenda dolor facere qui doloremque aliquam dicta fugit,
            <br/>
             nihil nisi autem alias eaque, perferendis dolorum animi quos? Obcaecati, temporibus autem.

             Simple dummy text for print.
            </span>
        <button className='button s-button'>Download CV</button>
        <div className='blur s-blur s-blur-bg'></div>
        </div>
        {/* Right side */}
        <div className="cards">
                <div>
                    <card 
                    emoji = {HeartEmoji}
                    heading = {'Design'}
                    details = {"Figma, Sketch, Photoshop, Adobe xd "}                    
                    />
                </div>
        </div>
   </div>
  )
}

export default Services
