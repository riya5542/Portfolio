import React from 'react';
import './App.css';
import Navbar from './component/Navbar';
import Hero from './component/Hero';
import Skill from './component/Skill';
import Work from './component/Work';
import Contactme from './component/Contactme';
import Project from './component/Project';


function App() {
  

  
  return (
   
   <>
   <Navbar/>
   <div className="container">
   <Hero/>
   <Skill />
   <Work/>
   <Project/>
   <Contactme/>
   </div>
   </>
    
  );
}

export default App;
