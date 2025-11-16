import React, { useState } from 'react'
import './services.css'

const Services = () => {
   
    const [activeState , setActiveState] = useState(0);
   
   const activeBox = (index) => {
  
    setActiveState(index);
  
}
  return (
         <section className="services section" id="services">
            <h2 className="section__title">
                Services
            </h2>
            <span className="section__subtitle">
                Ce que je propose
            </span>
            <div className="services--container container grid">
                <div className="services--content">
                    <div>   
                        <i className="uil uil-edit services__icon">

                        </i>
                        <h3 className="services--title">
                            Ui <br/>DESIGN
                        </h3> 
                    </div>
                    <span className="services--button" onClick=
                        {
                        ()=>activeBox(1)
                        }>
                        Voire Plus{""}
                        <i className="uil uil-arrow-right services__button-icon"></i>
                    </span>
                    <div className={activeState === 1 ? "service--box active--box " : "service--box"}>
                        <div className="service--box--content">
                            <i className="uil uil-times service--box--close" onClick=
                        {
                        ()=>activeBox(0)
                        } >        </i>
                            <h3 className="services--box--title">
                                    UI AND UX
                            </h3>
                            <p className="services--box--description">
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur maxime inventore aliquam, necessitatibus, rem doloribus, in nesciunt fugiat libero quaerat a voluptate vero voluptatum illo modi saepe sunt natus ex?
                            </p>
                            <ul className="services--box--services grid">
                                
                                <li className="services--box--service">
                                    <i className="uil uil-check-circle services--box--icon"></i>
                                    <p className="services--box--info">
                                       Je développe l'interface utilisateur
                                    </p>
                                </li>

                                <li className="services--box--service">
                                    <i className="uil uil-check-circle services--box--icon"></i>
                                    <p className="services--box--info">
                                    conception UI/UX innovante pour les applications interactives
                                    </p>
                                </li>

                                <li className="services--box--service">
                                    <i className="uil uil-check-circle services--box--icon"></i>
                                    <p className="services--box--info">
                                        Conception des logos innovants
                                    </p>
                                </li>

                            </ul>
                        </div>
                    </div>
                </div>
                <div className="services--content">
                    <div>   
                        <i className="uil uil-edit services__icon">

                        </i>
                        <h3 className="services--title">
                            Front-end <br/>Développement
                        </h3> 
                    </div>
                    <span className="services--button" onClick=
                        {
                        ()=>activeBox(2)
                        }>
                        Voire Plus{""}
                        <i className="uil uil-arrow-right services__button-icon"></i>
                    </span>
                    <div  className={activeState === 2 ? "service--box active--box " : "service--box"}>
                        <div className="service--box--content">
                            <i className="uil uil-times service--box--close" onClick=
                        {
                        ()=>activeBox(0)
                        }>                </i>
                            <h3 className="services--box--title">
                                Web Développement
                            </h3>
                            <p className="services--box--description">
                            </p>
                            <ul className="services--box--services grid">
                                
                                <li className="services--box--service">
                                    <i className="uil uil-check-circle services--box--icon"></i>
                                    <p className="services--box--info">
                                        création des sites Web réactifs performants et rapides  
                                    </p>
                                </li>

                                <li className="services--box--service">
                                    <i className="uil uil-check-circle services--box--icon"></i>
                                    <p className="services--box--info">
                                       je propose des solutions front-end créatives
                                    </p>
                                </li>

                                <li className="services--box--service">
                                    <i className="uil uil-check-circle services--box--icon"></i>
                                    <p className="services--box--info">
                                        création des sites avec la meilleure technologie qui  répond au besoin
                                    </p>
                                </li>

                            </ul>
                        </div>
                    </div>
                </div>
                <div className="services--content">
                    <div>   
                        <i className="uil uil-edit services__icon">

                        </i>
                        <h3 className="services--title">
                                Back-end <br/>Développement
                        </h3> 
                    </div>
                    <span className="services--button" onClick=
                        {
                        ()=>activeBox(3)
                        }>
                        Vioire Plus{""}
                        <i className="uil uil-arrow-right services__button-icon"></i>
                    </span>
                    <div  className={activeState === 3 ? "service--box active--box " : "service--box"}>
                        <div className="service--box--content">
                            <i className="uil uil-times service--box--close"  onClick=
                        {
                        ()=>activeBox(0)
                        }>        </i>
                            <h3 className="services--box--title">
                                 Back-end Développement
                            </h3>
                            <p className="services--box--description">
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed possimus vero dolores ullam numquam libero reprehenderit totam est minus nulla, eaque in similique eius? Exercitationem quae eum esse blanditiis incidunt.
                            </p>
                            <ul className="services--box--services grid">
                                
                                <li className="services--box--service">
                                    <i className="uil uil-check-circle services--box--icon"></i>
                                    <p className="services--box--info">
                                        I 
                                    </p>
                                </li>

                                <li className="services--box--service">
                                    <i className="uil uil-check-circle services--box--icon"></i>
                                    <p className="services--box--info">
                                    i create ui element interface
                                    </p>
                                </li>

                                <li className="services--box--service">
                                    <i className="uil uil-check-circle services--box--icon"></i>
                                    <p className="services--box--info">
                                        I develop the user interface
                                    </p>
                                </li>

                            </ul>
                        </div>
                    </div>
                </div>
            </div>
         </section>
  )
}

export default Services
