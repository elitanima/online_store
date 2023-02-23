
import './App.css';
import React from "react";
// import { Header } from './components/Header/Header';
// import { Main } from './components/Main/Main';
// import { Footer } from './components/Footer/Footer';
import { Autorization } from './components/Autorization/Autorization';
import { Promotion } from './components/Promotion/Promotion';
import { Navigate } from "react-router-dom";

// import { useState } from 'react';


export const FirstContext = React.createContext({});


function App() {

  return (
    <div className='container'>
     
      <div className='authorization'>
        <Navigate to="/autorization"/>
      </div>
    </div>
   
  );
}

export default App;

// {/* <div className='promotion_view'>
// <Promotion />
// </div>
// <div className='screenView'>
// <Header />
// <Main />  
// <Footer />
// </div> */}