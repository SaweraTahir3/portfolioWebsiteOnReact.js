import React from 'react'
import './contact.css'
import Facebook from '../../assets/facebook.png'
import Adobe from '../../assets/Adobe.png'
import Microsoft from '../../assets/Microsoft.png'
import Walmart from '../../assets/Walmart 1.png'
import icon1 from '../../assets/faceboob.icone.png'
import icon2 from '../../assets/insta.icon.jpeg'

import icon3 from '../../assets/twttier.png'
import icon4 from '../../assets/youtube.icon.png'


const Contact = () => {
  return (
    <div>
      <section className="contactPage">
        <div id="clients">
        <h1 className="contactPageTitle">My Clients</h1>
        <p className="clientDesc">I have had the opportunity to work width a diverse group of companies. some of the notable companies I  HAVE WORKED WITH INCLUDES.
        </p>
        <br />
        <div className="clentImgs">
          <img src={Facebook} alt=""  className='clientImg pic ' />
          <img src={Adobe} alt=""  className='clientImg pic'   />
          <img src={Microsoft} alt=""  className='clientImg pic' />

          <img src={Walmart} alt=""  className='clientImg pic'  />
        </div>
        </div>
        <div id="contact">
<h1 className="contactPageTitle">Contact  Me</h1>
<span className="contactDesc">please fill out the form below to discuss  any work opportunities.</span>
<form className='contactFrom'>
  <input type="text" className='name' placeholder='Name' />
  <input type="email" className="email"  placeholder='Email'/>
  <textarea name="message" className="msg" cols=""  placeholder='your message' rows="5"></textarea> <br />
  <button  type="submit " value="send"className="submit">submit</button>
  <br />
  <div className="links">
    <img src={icon1} alt=""   className='link'/>
    <img src={icon2} alt=""   className='link'/>
    <img src={icon3} alt=""   className='link'/>
    <img src={icon4} alt=""   className='link'/>
  </div>
</form>

        </div>
      </section>
    </div>
  )
}

export default Contact
