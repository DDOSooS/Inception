import React from 'react'
import "./skills.css"
import Frontend from './Frontend'
import Backend from './Backend'
import Further from './Further'


export default function Skills() {
  return (
      <section className="skills section" id="skills">
      
      <h2 className="section__title">
        Compétences
      </h2>

      <span className="section__subtitle">
        Mes Compétences
      </span>

      <div className="skills--container container grid">

        <Frontend/>
        <Backend/>
        <Further/>
                
      </div>

    </section>
  )
}
