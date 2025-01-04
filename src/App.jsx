import React from 'react'
import '@fontsource/roboto/500.css';
import Navbar from './Components/Navbar';
import Home from './Pages/Home';
import { Route, Routes } from 'react-router-dom';
import PersonlaDetail from './Pages/PersonlaDetail';
import EducationalDetails from './Pages/EducationalDetails';
import { Projects } from './Pages/Projects';
import Experience from './Pages/Experience';


const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/details' element={<PersonlaDetail />} />
        <Route path='/edu' element={<EducationalDetails />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/exp' element={<Experience />} />
      </Routes>

    </>
  )
}

export default App