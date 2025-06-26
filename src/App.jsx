import { useState } from 'react'
import reactLogo from './assets/react.svg'
import { BrowserRouter as Router, Routes, Route } from 'react-router'
import Home from './pages/Home'
import ProjectDescription from './pages/ProjectDescription'
import Navbar from './components/Navbar'
import Menubar from './components/Menubar'



function App() {
      const [isOpen, setIsOpen] = useState(false)
  return (
    <>
      <Router>
        <Navbar setIsOpen={setIsOpen} isOpen={isOpen} />
        <Menubar setIsOpen={setIsOpen} isOpen={isOpen} />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/projects/:id' element={<ProjectDescription />} />
        </Routes>
      </Router>

    </>
  )
}

export default App
