import React from 'react'
import'./navbar.css'
import logo from '../../assets/logo1.jpeg'
 import  { Link } from 'react-scroll'
 import contact from '../../assets/contact.png'
const Navbar = () => {
  return (
    <div>
  <nav className="navbar">
    <img src={logo} alt="logo"  className='logo'/>
    <div className="desktopMeno">
<Link  activeClass='active' to='intro' spy={true} smooth={true}  offset={-100} duration={500}className="desktopMenuListItems">  Home </Link>
<Link  activeClass='active' to='skills' spy={true} smooth={true}  offset={-10} duration={500}k className="desktopMenuListItems"> About </Link>
<Link  activeClass='active' to='works' spy={true} smooth={true}  offset={-50} duration={500} className="desktopMenuListItems">Portfolio</Link>
<Link   activeClass='active' to='clients' spy={true} smooth={true}  offset={-40} duration={500}className="desktopMenuListItems"> Clients</Link>
    </div> 
    <button className="desktopmenobtn" onClick={()=>{
      document.getElementById('contact').scrollIntoView({behavior:'smooth'})
    }}> 
        <img src={contact} alt="" className='desktopMenuImg' />Contact me
    </button>
  </nav>
    </div>
  )
}

export default Navbar
