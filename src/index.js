import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Registration_window } from './components/Registration_window/Registration_window';
import { Authorization_window } from './components/Authorization_window/Authorization_window';
import { Autorization } from './components/Autorization/Autorization';
import { Basket } from './components/Basket/Basket';
import { Profile } from './components/Profile/Profile';
import { Contacts } from './components/Contacts/Contacts';

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
    path: "/singin",
    element: <Authorization_window/>
  },
  {
    //страница регистрации
    path: "/singup",
    element: <Registration_window/>
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
  {
    //Контакты
    path: "/contacts",
    element: <Contacts/>
  },

 
]);
//--end--//

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
   
  </React.StrictMode>
);
