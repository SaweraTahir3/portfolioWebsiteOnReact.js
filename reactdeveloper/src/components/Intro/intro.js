import React from 'react'
import './intro.css'
import Bg from '../../assets/white.avif'
// import Back from '../../assets/imagesgray.avif'
import  { Link } from 'react-scroll'
import btnImg from '../../assets/hireme.png'

const Intro = () => {
  return (
    <section id="intro">
        <div className="introContent">
<span className="hello">
    Hello,
</span>
<span className="introtext"> i am <span className="introName">Sawera </span> <br />Web Developer</span>
<p className="introPaara">  I am  a  skilled  Web Developer with  experience in creating visually  <br />appealing and user friendly websites.
<br />
<Link><button className="btn"><img src={btnImg} alt="" className='btnImg' /> Hire Me</button></Link>
</p>
        </div>
        <img src={Bg} alt=""  className='Bg'/>
    </section>
  )
}

export default Intro
