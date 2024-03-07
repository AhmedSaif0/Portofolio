
import './Assets/Home.scss'
import Header from './Components/Header';
import Home from './Components/Home';
import About from './Components/About';
import Skills from './Components/Skills';
import Projects from './Components/Projects';
import './App.scss'
import Contact from './Components/Contact'
import Allservices from  './Components/Allservices'
import { Timeline } from './Components/Timeline';


function App() {
  return (
    <div>
        <Header/> 
        <Home/>
        <About/>
        <Skills/>
        <Timeline />
        <Allservices/>
        <Projects/>
        <Contact/>
    </div>
  );
}

export default App;
