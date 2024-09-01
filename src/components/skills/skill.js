import React from 'react';
import './skill.css';
import uidesign from '../../assets/ui-design.png';
import webdesign from '../../assets/website-design.png';
import appdesign from '../../assets/app-design.png'


const Skill = () => {
  return (
    <section id="skills">
        <span className="skilltitle"> What I do</span> <br />
        <span className="skilldesc">MERN Developer , DSA & Founder @Align25</span>

        <div className="skillbigbox">

            <div className="skillbox">
                <img src={uidesign} alt="" className='skillboximg' />
                <div className="skillboxtext">
                    <h2>DSA</h2>
                    <p>Data Structures and Algorithms in C++</p>
                </div>  
            </div>

            <div className="skillbox">
                <img src={webdesign} alt="" className='skillboximg' />
                <div className="skillboxtext">
                    <h2>Web Development</h2>
                    <p>Backend Developer </p>
                </div>  
            </div>

            <div className="skillbox">
                <img src={appdesign} alt="" className='skillboximg' />
                <div className="skillboxtext">
                    <h2>Public Speaking</h2>
                    <p>Debater & Extempore Speaker </p>
                </div>  
            </div>

        </div>
    </section>
  )
}

export default Skill 
