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
import chatBubble  from './assets/chat-bubble.png';

function App() {

  const [displayBot, setDisplayBot] = useState(false)
  const [project, setProject] = useState('')
  

  function toggleContactView() {
    setDisplayBot(!displayBot)
  }

  function changeProject(projectId) {
    setProject(projectId)
}



  return (
    <div className="App">
        <Nav
        toggleContactView={toggleContactView}

        />
        <Routes>
          <Route path='/portfolio' element={<Work changeProject={changeProject} all_projects={all_projects} />} />
          <Route path='/about' element={<About/>} />
          <Route path={`/${project}`} element={<ProjectPage project={all_projects[project - 1]} />}/>
        </Routes>
        {displayBot ? <Contact toggleContactView={toggleContactView} /> : ""}
        {displayBot ? <Contact toggleContactView={toggleContactView} /> : <img onClick={toggleContactView} className='chat-bubble' src={chatBubble} alt='chat bubble' />}
        <Footer />
    </div>
  );
}

export default App;
