import style from './App.css';
import { Header } from './components/Header/Header';
import { Main } from './pages/Main/Main';
import { Footer } from './components/Footer/Footer';


// import { useState } from 'react';



function App() {

  return (
    <div className='container'>
      {/* <div className='promotion_view'>
        <Promotion />
      </div> */}
      <div className='screen_view'>
        <Header />
        <Main />  
        <Footer />
      </div>
    </div>
   
  );
}

export default App;