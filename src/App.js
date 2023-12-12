
import './Assets/Home.scss'
import Header from './Components/Header';
import Home from './Components/Home';
import About from './Components/About';
import Skills from './Components/Skills';
import Projects from './Components/Projects';
import './App.scss';
import Services from './Components/Services';
import Contact from './Components/Contac';


function App() {
  return (
    <div >
        <Header/> 
        <Home/>
        <About/>
        <Skills/>
        <Services/>
        <Projects/>
        <Contact/>
    </div>
  );
}

export default App;
