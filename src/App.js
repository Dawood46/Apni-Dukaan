import React from 'react'
import './App.css';
import Header from './component/Header';
import Footer from './component/Footer';
import Content from './component/Content';

function App() {
  return (
  <div className="container">
    <Header />
    <Content  />
    <Footer />
   
  </div>
  );
}

export default App;
