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
import { Provider } from 'react-redux'
import { store } from './redux/store';
import { Favorites } from './pages/Favorites/Favorites';
import { CurrentProduct } from './pages/CurrentProduct/CurrentProduct';

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
    //главная страница
    path: "/main/:idOfProduct",
    element:  <CurrentProduct />
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
  {
    //избранное
    path: "/favorites",
    element: <Favorites />
  }, 
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <Provider store={store}>
      <QueryClientProvider client={queryClient} >
        <RouterProvider router={router} />
      </QueryClientProvider>
      </Provider>
  </React.StrictMode>
);
