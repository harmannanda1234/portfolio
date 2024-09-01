import React, {useRef} from 'react'
import './contact.css'
import instagramicon from '../../assets/instagram.png' ;
import twitter from '../../assets/twitter.png' ;
import facebookicon from '../../assets/facebook-icon.png' ;
import emailjs from '@emailjs/browser';


const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs
          .sendForm('service_sij2a8c', 'template_b1i6xgl', form.current, {
            publicKey: 'lqmxCUFKx0qm6hjwF',
          })
          .then(
            () => {
              console.log('SUCCESS!');
            },
            (error) => {
              console.log('FAILED...', error.text);
            },
          );
      };
    
return(
    <section id="contactPage">
    <div className='contact'>
      <h1 className="contactpagetitle">Contact Me</h1>
      <span className="contactdesc">Connect with me </span>
      <form action="" className="contactform" ref={form} onSubmit={sendEmail}>
        <input type="text" className="name" placeholder='Name' name='user_name' />
        <input type="email" className="email" placeholder='email' name='user_email' />
        <textarea name="message" rows="5" placeholder='Your Message' className='msg' ></textarea>
        <button type='submit' value='send'  className="submitbtn" onClick={()=>{alert("Message sent successfully:)")}}>Submit</button>
      </form>
    </div>
    
    <div className="links">
    <a href="https://www.instagram.com/harmannanda_" >
    <img src={instagramicon} alt="Instagram" class="link" />
    </a>
    
    <a href="https://x.com/harmannanda_06">
    <img src={twitter} alt="Twitter" class="link" />
    </a>
    
    <a href="https://www.facebook.com" >
    <img src={facebookicon} alt="Facebook" class="link" />
    </a>

    </div> 



</section>
)

    
}

export default Contact
