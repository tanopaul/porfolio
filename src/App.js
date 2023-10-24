import './App.css';
import Nav from './Nav';
import About from './About';
import Work from './Work';
import Contact from './Contact'
import Footer from './Footer'
import ProjectPage from './ProjectPage';
import { Route, Routes } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import { all_projects } from './allProjects';


function App() {

  const [displayBot, setDisplayBot] = useState(false)
  const [project, setProject] = useState('')
  // const [navActive, setNavActive] = useState(false)
  // const myRef = useRef(null);
    
  
  // const [isItVisible, setIsItVisible] = useState();
    
  //   useEffect(() => {
        
  //       const observer = new IntersectionObserver((entries) => {
  //           const entry = entries[0];
  //           setIsItVisible(entry.isIntersecting)
  //           handleNavActive(entry)
  //       })
  //       observer.observe(myRef.current);
        
  //   }, [])

  function toggleContactView() {
    setDisplayBot(!displayBot)
  }

  function changeProject(projectId) {
    setProject(projectId)
}

// function handleNavActive() {
//   setNavActive(!navActive)
// }

  return (
    <div className="App">
        <Nav
        toggleContactView={toggleContactView}

        />
        <Routes>
          <Route path='/' element={<Work changeProject={changeProject} all_projects={all_projects} />} />
          <Route path='/about' element={<About/>} />
          <Route path={`/${project}`} element={<ProjectPage project={all_projects[project - 1]} />}/>
        </Routes>
        {displayBot ? <Contact toggleContactView={toggleContactView} /> : ""}
        <Footer />
    </div>
  );
}

export default App;
