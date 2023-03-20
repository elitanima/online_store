import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { RegistrationWindow } from './pages/RegistrationWindow/RegistrationWindow';
import { Autorization } from './pages/Authorization/Autorization';
import { Basket } from './pages/Basket/Basket';
import { AuthorizationWindow } from './pages/AuthorizationWindow/AuthorizationWindow';
import { Profile } from './pages/Profile/Profile';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient()

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
    element: <AuthorizationWindow />
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
    element: <Profile />
  }, 
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient} >
      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>
);
