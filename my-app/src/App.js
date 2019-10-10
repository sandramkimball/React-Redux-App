import React from 'react';
import './App.css';
import Launches from './components/Launches';

function App() {
  return (
    <div className="App">
      <header className='header'>
        <h3>Breweries</h3>
      </header>
      <section className="container">
        <Launches />
      </section>
    </div>
  );
}

export default App;
