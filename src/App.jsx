import React from 'react';
import './App.css'; // Import the galaxy background styles
import Navbar from './components/Navbar';
import butterfly from './assets/white butterfly.gif';
import Skills from './components/Skills'; // Import your skills component
import sticker from './assets/Pink Butterfly Sticker.gif';
import Projects from './components/Projects';
import Contact from './components/Contact';
function App() {
  return (
    <>
      <div className="App">
        <Navbar />
        <div className="main" >
          <div className="left">
            <p>
              <span style={{color:" rgb(230, 239, 100)"}}>Hello !!</span> <br /> I'm Sritama Mitra ,<br/> a passionate Frontend Developer focused on creating responsive, visually appealing, and user-friendly web experiences.
            </p>
          </div>
          <div className="right">
            <img src={butterfly} alt="White butterfly animation" />
          </div>
        </div>

        {/* Skills Section */}
        <div className="skills" id="skills">
          <Skills/>
        </div>
        <div id="projects">
          <Projects/>
        </div>
        <div className="contact" id="contact">
          <Contact/>
        </div>
          
      </div>
    </>
  );
}

export default App;
