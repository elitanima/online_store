import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { RegistrationWindow } from './components/RegistrationWindow/RegistrationWindow';
import { AuthorizationWindow } from './components/AuthorizationWindow/AuthorizationWindow';
import { Autorization } from './components/Authorization/Autorization';
import { Basket } from './components/Basket/Basket';
import { Profile } from './components/Profile/Profile';


//маршрутизация
const router = createBrowserRouter([
  {
    //выбор либо на вход либо на регистрацию
    path: "/",
    element:  <Autorization />
  },
  {
    //главная страница
    path: "/main",
    element:  <App />
  },
  {
    //страница входа
    path: "/signin",
    element: <AuthorizationWindow/>
  },
  {
    //страница регистрации
    path: "/signup",
    element: <RegistrationWindow/>
  },
  {
    //корзина
    path: "/basket",
    element: <Basket/>
  },
  {
    //личный кабинет
    path: "/profile",
    element: <Profile/>
  },
  // {
  //   //Контакты
  //   path: "/contacts",
  //   element: <ButtonClose/>
  // },

 
]);
//--end--//

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
   
  </React.StrictMode>
);
