import {
  Route,
  Routes
} from 'react-router-dom';
import './Assets/Home.scss'
import Header from './Components/Header';
import Home from './Components/Home';
import Skills from './Components/Skills';
import Projects from './Components/Projects';
import './App.scss';
import Services from './Components/Services';
import Myservices from './Components/Myservices';

function App() {



  return (
    <div className="App">
        <Header/> 
        <Home/>
        <Services/>
        <Skills/>
        <Myservices/>
        {/* <Projects/> */}

    </div>
  );
}

export default App;
