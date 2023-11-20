import { Link } from 'react-router-dom'
import './Home.css'
const Home = () => {
    const url = 'http://localhost:5173/about'
  return (
    <>
    
    <div className='Title'>
        <div className='logotitle'>Marcelo Carvalho</div>
        <div className='subtitle'>Desenvolvedor front-end</div>
    </div>
    <div className='button-container'>
        <Link to={url} className='button'>Quem sou eu?</Link>
    </div>
    </>
    
  )
}

export default Home