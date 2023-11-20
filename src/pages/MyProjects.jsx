import './MyProjects.css'
import { Link } from 'react-router-dom'
const MyProjects = () => {
  const url = 'https://marcelocarvalho.vercel.app/links'
  return (
    <>
      <div className="MyProjects">
        <h1>Meus projetos</h1>
      </div>

      <div className='Projects'>
        <div className="Project">
          <h2>Em breve</h2>
          <p>É só esperar...</p>
        </div>
        <div className="Project">
          <h2>Em breve</h2>
          <p>É só esperar...</p>
        </div>
        <div className="Project">
          <h2>Em breve</h2>
          <p>É só esperar...</p>
        </div>
      </div>

      <div className='button-containerC'>
        <Link to={url} className='button'>Conheça mais</Link>
      </div>
    </>
  )
}

export default MyProjects