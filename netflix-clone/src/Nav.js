import React, {useState,useEffect} from 'react'
import './Nav.css';

function Nav() {
    const [show, handleShow] = useState(false);

    useEffect(() => {
        const listener = () => {
          if (window.scrollY > 100) {
            handleShow(true);
          } else handleShow(false);
        };
      
        window.addEventListener("scroll", listener);
      
        return () => {
          window.removeEventListener("scroll", listener);
        };
      }, []);
      
  return (
    <div className={`nav ${show && "nav_black"}`}>
     {/* <div>  */}
      <img
                className="nav__logo"
                src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
                alt="Netflix Logo"/>
            
            <img
                className="nav__avatar"
                src="https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png"
                alt="Avatar"/>
    </div>
  )
}

export default Nav
