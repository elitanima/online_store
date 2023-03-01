
import style from './App.css';
import { Header } from './components/Header/Header';
import { Main } from './components/Main/Main';
import { Footer } from './components/Footer/Footer';
import { Promotion } from './components/Promotion/Promotion';
import { Account_module } from './components/Account_module/Account_module';

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
      <div className='authorization'>
       <Account_module />
      </div>
    </div>
   
  );
}

export default App;