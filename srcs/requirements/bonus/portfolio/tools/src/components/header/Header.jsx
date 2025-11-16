import React, { useState } from 'react'
import "./header.css"
const Header = () => {

  const[Toggle, showMenu] = useState(false);

  return (
    <header className="header">
      <nav className='nav container'>
          <a href="index.html"  className='nav--logo'> DDOS0__0</a>
        
          <div className={Toggle? "nav--menu show--menu":"nav--menu"}>

            <ul className="nav--list grid">
              
              <li className="nav--item">
                <a href="#home" className="nav--link active--link">
                  <i class="uil uil-estate nav__icon "></i> Home
                </a>
              </li>

              <li className="nav--item">
                <a href="#about" className="nav--link">
                    <i className="uil uil-user nav__icon"></i>About
                </a>
              </li>

              <li className="nav--item">
                <a href="#skills" className="nav--link">
                    <i className="uil uil-file-alt nav__icon"></i>Skills
                </a>
              </li>

              <li className="nav--item">
                <a href="#services" className="nav--link">
                    <i className="uil uil-briefcase-alt nav__icon"></i>Services
                </a>
              </li>

              <li className="nav--item">
                <a href="#portfolio" className="nav--link">
                    <i className="uil uil-scenery nav__icon"></i>Portfolio
                </a>
              </li>
                
              <li className="nav--item">
                <box-icon type='solid' name='home'></box-icon>
                <a href="#contact" className="nav--link">
                    <i className="uil uil-message nav__icon"></i>Contact us
                </a>
              </li>

            </ul>

            <i className="uil uil-times nav--close " onClick={()=> showMenu(!Toggle)}></i>

          </div>
          <div className="nav--toggle" onClick={()=> showMenu(!Toggle)}>
            <i className="uil uil-apps"></i>
          </div>

      </nav>
    </header>
  )
}

export default Header
