import React from 'react'
import "./footer.css"
const Footer = () => {
  return (
    <footer className='footer'>
        <div className="footer--container container">
            <h1 className="footer--title">
                Gherghouch Abdessalam
            </h1>
            <ul className="footer--list">
                <li>
                    <a href="#about" className="footer--link">
                        About
                    </a>
                </li>
                <li>
                    <a href="#about" className="footer--link">
                        Skills
                    </a>
                </li>
                <li>
                    <a href="#about" className="footer--link">
                        Services
                    </a>
                </li>
            </ul>

           <div className="footer--social">

                <a href="#contact" className="footer--social--icon" target="_blank">
                     <i class="uil uil-instagram"></i> 
                </a>

                <a href="#contact" className="footer--social--icon" target="_blank">
                    <i class="uil uil-twitter-alt"></i>
                </a>

                <a href="#contact" className="footer--social--icon" target="_blank">
                    <i class="uil uil-linkedin"></i>
                </a>
                
            </div> 
            <div className="footer--copyright">
                &#169; DDO-0X Coder, All right reserved
            </div>
        </div>
    </footer>
  )
}

export default Footer
