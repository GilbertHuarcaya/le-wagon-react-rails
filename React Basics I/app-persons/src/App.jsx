import React from 'react';
import './App.css';
import Navigation from './components/Navbar';
import Footer from './components/Footer';
import Cards from './components/Cards';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Cards />
      <Footer />
    </div>
  );
}

export default App;
