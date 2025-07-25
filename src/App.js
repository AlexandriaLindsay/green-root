// import logo from './logo.svg';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import { Header } from './components/Header.js';
import { Footer } from './components/Footer.js';
import Home from './views/Home.js';


function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
