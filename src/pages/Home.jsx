import { Link } from 'react-router-dom'
import './Home.css'
const Home = () => {
    const url = 'https://marcelocarvalho.vercel.app/about'
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
