import React from 'react'
import '@fontsource/roboto/500.css';
import Navbar from './Components/Navbar';
import Home from './Pages/Home';
import { Route, Routes } from 'react-router-dom';
import PersonlaDetail from './Pages/PersonlaDetail';
import EducationalDetails from './Pages/EducationalDetails';
import { Projects } from './Pages/Projects';
import Experience from './Pages/Experience';
import ExtraDetails from './Pages/ExtraDetails';
import Resume from './Pages/Resume';


const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/details' element={<PersonlaDetail />} />
        <Route path='/edu' element={<EducationalDetails />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/exp' element={<Experience />} />
        <Route path="/extra" element={<ExtraDetails />} />
        <Route path='/resume' element={<Resume />} />
      </Routes>

    </>
  )
}

export default App