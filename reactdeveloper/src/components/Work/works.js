import React from 'react'
import './works.css';

import Portfolio2 from '../../assets/WhatsApp Image 2024-05-01 at 3.48.02 PM copy.jpeg';
import Portfolio3 from '../../assets/WhatsApp Image 2024-05-01 at 3.48.41 PM.jpeg';
import Portfolio4 from '../../assets/game 2.png';
import Portfolio5 from '../../assets/weeb.jpg';
import Portfolio6 from '../../assets/clock.png';
import Portfolio1 from '../../assets/WhatsApp Image 2024-05-01 at 3.50.28 PM.jpeg'
import Portfolio7 from '../../assets/eeee.jpeg';
import Portfolio8 from '../../assets/login form.png';
import Portfolio9 from '../../assets/vvvv.jpeg';
const Works = () => {
  return (
    <div>
      <section id='works'>
        <h2 className="worksTitle"> projects</h2>
        <span className="worksDesc"></span>
<div className="worksImgs">
    <img src={ Portfolio1 } alt="" className="worksImg" />
    
    <img src={ Portfolio2 } alt="" className="worksImg" />
    
    <img src={ Portfolio3 } alt="" className="worksImg" />
    
    <img src={ Portfolio4 } alt="" className="worksImg" />
    <br />
    <img src={ Portfolio5 } alt="" className="worksImg" />
    
    <img src={ Portfolio6} alt="" className="worksImg" />
    
    <img src={Portfolio7} alt="" className="worksImg" />
    <img src= {Portfolio8}alt="" className="worksImg" />
    <img src={Portfolio9} alt="" className="worksImg" />
  
    </div>
    <button className='workBtn'> See More</button>


      </section>
    </div>
  );
}

export default Works;
