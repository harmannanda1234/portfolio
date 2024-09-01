// Experience.js
import React from 'react';
import './experience.css';
import Card from '../card/card';
import ncrtc from '../../assets/ncrtc.png';
import ieee from '../../assets/ieee.png';
import praxis from '../../assets/praxis.png';




const Experience = () => {
  return (
    <section id='experience'>
      <h1 className="heading">Experience</h1>
      <div className='cards'>
      <Card 
        imagecard={ncrtc}
        title="Backend Developer Intern" 
        content="Worked at NCRTC, involved in developing and maintaining back-end systems."
      />
       <Card 
        imagecard={ieee}
        title="DSA Coordinator " 
        content="Worked at IEEE-GTBIT, Hosted the DSA Bootcamp , teaching c++ to a batch of 10 students."
      />
      <Card 
        imagecard={praxis}
        title="Praxis ED." 
        content="Worked as CTO of Praxis ed., Developed Websites."
      />
      </div>
    </section>
  );
}

export default Experience;
