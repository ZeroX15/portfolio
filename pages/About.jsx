import './About.css'
import { Link } from 'react-router-dom'

import js from '../assets/js.png'
import css from '../assets/css.png'
import react from '../assets/react.png'
import nodejs from '../assets/node-js.png'
import html from '../assets/html.png'
import git from '../assets/git.png'


const About = () => {
  const url = 'https://marcelocarvalho.vercel.app/myprojects';

  return (
    <>
    <div className="Container">
      <div className="About">
        <h1 className='AboutMe'>Sobre mim</h1>
        <p className='Description'>Eu me chamo Marcelo José F. de S. B. B. Carvalho, 
        mas pode me chamar como Marcelo Carvalho, tenho 21 anos, eu tenho interesse em aprender a programar desde
        a minha adolescência, quando meu irmão mais velho começou a aprender também.</p>
      </div>
      <div className='Techs'>
        <h1 className='KnowTech'>O que eu sei:</h1>
        <div className="TechsGrid">
          <img src={js} alt="Javascript" />
          <img src={react} alt="ReactJS" />
          <img src={nodejs} alt="NodeJS" />
          <img src={git} alt="Git" />
          <img src={html} alt="HTML" />
          <img src={css} alt="CSS" />
        </div>
      </div>
      <div className='button-containerB'>
        <Link to={url} className='button'>Dê uma olhada no que fiz</Link>
      </div>
    </div>
    </>
    
  )
}

export default About