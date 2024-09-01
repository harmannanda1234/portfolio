import React from 'react'
import './intro.css';
import mainbg from '../../assets/mainbg.png';
import {Link} from 'react-scroll';
import btn from'../../assets/hireme.png'
const Intro = () => {
  return (
    <section id="intro">
        <div className="introContent">
            <span className='hello'>Hello there, I am <span  className="introName">Harmanjot Singh Nanda</span> </span> 
            <span className='introText'> I am a <br /> <span className="introdesc">Web Developer</span><br/></span><br /> 
            <p className="intropara">I am a Btech student <br />lets connect and build together {':)'} <br /> </p>

          <Link><button className='btn'><img src={btn} alt="" className='btnimg' onClick={function(){
            window.location.href=" https://www.linkedin.com/in/harmanjot-singh-nanda-80794a292/";
          }} />LinkedIn</button></Link>

        </div>


        <img src={mainbg} alt="" className="mainbg" />


    </section>
  )
}

export default Intro
