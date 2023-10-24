import { NavLink } from "react-router-dom";
import { useRef, useState, useEffect } from 'react'
// import {useRef} from 'react'
function Nav({toggleContactView, handleNavActive, isItVisible}) {
    // const navRef = useRef(null);
    const [navActive, setNavActive] = useState(false)

    function handleClick(){
      toggleContactView()
    }

    const changeNavActive = () => {
      window.scrollY >= 100 ? setNavActive(true) : setNavActive(false);
    }

    // function handleFocus(index) {
    //   const navLink = navRef.current;

    //   const link = navLink.getElementsByClassName('nav-link')[index];
    //   link.classList.replace('nav-link', 'nav-link-active')
    // }

    useEffect(() => {
      window.addEventListener('scroll', changeNavActive);
    }, [])
    

    

    return (
      <div  className="nav">
        <div className="nav-container" style={navActive  ? {backgroundColor:'hsla(45, 17%, 96%, 0.8)', backdropFilter: "blur(20px) saturate(1.7)", boxShadow: '0px 3px 6px rgba(0, 0, 0, 0.3)'} : {backgroundColor:'transparent'}}>
          <NavLink exact to='/' className='nav-link' >Work</NavLink>
          <NavLink exact to='/about' className='nav-link' >About</NavLink>
          <NavLink onClick={handleClick} className='nav-link'>Contact</NavLink>
        </div>
      </div>
    );
  }
  
  export default Nav;