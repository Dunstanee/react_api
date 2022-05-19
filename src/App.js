
import React from 'react';
import Header from './views/header';
import './App.css';
import Footer from './views/Footer';
import About from './views/About';
import GetStarted from './views/GetStarted';
import Grouping from './views/Grouping';

function App() {
  return (
    <div> 
       <Header />
       <About />
       <GetStarted />
       <Grouping />
       <Footer />
    </div>
  );
}

export default App;
