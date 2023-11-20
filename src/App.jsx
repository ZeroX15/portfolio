import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Navbar from './components/Navbar'

import Home from './pages/Home'
import About from './pages/About'
import MyProjects from './pages/MyProjects'
import Links from './pages/Links'


function App() {
  

  return (
    <>
    <link href='https://fonts.googleapis.com/css?family=Red Hat Display' rel='stylesheet'/>
      <div className="App">
      <div className="logo">Marcelo Carvalho</div>
        <BrowserRouter>
        <Navbar/>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/myprojects' element={<MyProjects/>}/>
            <Route path='/links' element={<Links/>}/>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
