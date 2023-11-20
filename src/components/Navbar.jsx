import './Navbar.css'
import { NavLink } from "react-router-dom"
const Navbar = () => {

  return (
    <>
    <nav className='Pages'>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">Sobre mim</NavLink>
        <NavLink to="/myprojects">Meus projetos</NavLink>
        <NavLink to="/links">Links</NavLink>
    </nav>
    <div className="line-container"></div>
    </>
    
  )
}

export default Navbar