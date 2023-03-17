
// "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2Q3ZTY0NDU5Yjk4YjAzOGY3N2FlYTIiLCJncm91cCI6IjktZ3IiLCJpYXQiOjE2Nzc4NjU1MTQsImV4cCI6MTcwOTQwMTUxNH0.p7p5_50DnLpF1MWTYKMMby_3WF1JgtA5Z89HP4SD9sQ"

import style from './App.css';
import { Header } from './components/Header/Header';
import { Main } from './components/Main/Main';
import { Footer } from './components/Footer/Footer';
import { Promotion } from './components/Promotion/Promotion';
import { AccountButton } from './components/AccountButton/AccountButton';


// import { useState } from 'react';



function App() {

  return (
    <div className='container'>
      <div className='promotion_view'>
        <Promotion />
      </div>
      <div className='screen_view'>
        <Header />
        <Main />  
        <Footer />
      </div>
      <div className='authorization'>
       <AccountButton/>
      </div>
    </div>
   
  );
}

export default App;