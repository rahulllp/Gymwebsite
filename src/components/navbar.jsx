import React,{useState} from 'react'
import logo from '../images/logo.png';
import {Link} from 'react-scroll';
import '../index.css'

function Navbar() {
    const [navb,setnav]=useState(false); 
    const changeBackground =()=>{
        if(window.scrollY>=50){
            setnav(true);
        }else{
            setnav(false);
        }
    }
    window.addEventListener('scroll',changeBackground); 
  return (
    <nav className={navb?"nav active":"nav"}>
      <Link to='main' className='logo'smooth={true} duration={1000}>
      <img src={logo} alt=''/>
      </Link> 
      <label className='menuiconna' for='menu-btn'>
      <span className='nav-iconna'></span>
      </label>
      <ul className='menuna'>
      <li style={{color: 'white'}}><Link to="main" smooth={true} duration={1000}>Header</Link></li>
      <li style={{color: 'white'}}><Link to="features"smooth={true} duration={1000}>Features</Link></li>
      <li style={{color: 'white'}}><Link to="presentaion"smooth={true} duration={1000}>Offer</Link></li>
      <li style={{color: 'white'}}><Link to="about"smooth={true} duration={1000}>About</Link></li>
      <li style={{color: 'white'}} ><Link to="contact"smooth={true} duration={1000}>Contact</Link></li>
      </ul>
    </nav>
  )
}

export default Navbar;

