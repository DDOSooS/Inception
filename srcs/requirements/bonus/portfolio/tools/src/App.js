import logo from './logo.svg';
import './App.css';
import Header from './components/header/Header';
import Home from './components/home/Home';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Services from './components/Services/Services';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
 

function App() {
  return (
    <>
    <Header/>
    <main className="mainContent">
      <Home/>
      <About/>
      <Skills/>
      <Services/>
      <Contact/>
    </main>
    <Footer/>
    </>
  );
}

export default App;
