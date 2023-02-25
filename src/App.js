
import './App.css';
import { Header } from './components/Header/Header';
import { Main } from './components/Main/Main';
import { Footer } from './components/Footer/Footer';
import { Autorization } from './components/Autorization/Autorization';
import { Promotion } from './components/Promotion/Promotion';

// import { useState } from 'react';



function App() {

  return (
    <div className='container'>
      <div className='promotion_view'>
        <Promotion />
      </div>
      <div className='screenView'>
        <Header />
        <Main />  
        <Footer />
      </div>
    </div>
   
  );
}

export default App;