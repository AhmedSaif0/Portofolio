import {
  Route,
  Routes
} from 'react-router-dom';
import './Assets/Home.scss'
import Header from './Components/Header';
import Home from './Components/Home';
import About from './Components/About';
import Projects from './Components/Projects';
import './App.scss';
import Services from './Components/Services';

function App() {



  return (
    <div className="App">
        <Header/> 
        <Home/>
        <Services/>
        <About/>
        <Projects/>

    </div>
  );
}

export default App;
