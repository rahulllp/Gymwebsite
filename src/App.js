import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar'
import Header from './components/Headear'
import Feature from './components/features'
import Offer from './components/offer'
import About from './components/about'
import Contact from './components/contact'
function App() {
  return (
    <div className="App">
       <div>
       <Navbar/>
       <Header/>
       <Feature/>
       <Offer/>
       <About/>
       <Contact/>
       </div>
    </div>
  );
}

export default App;
