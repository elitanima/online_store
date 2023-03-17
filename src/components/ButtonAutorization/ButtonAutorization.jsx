
import style from './style.module.css'

import { useNavigate } from "react-router-dom";


export function ButtonAutorization(){

  const navigate = useNavigate();
 
    return (
      <>
         <div className={style.button_view}>
           <button className={style.button} onClick={() => navigate("/signin")}>Вход</button> 
           <button className={style.button} onClick={() => navigate("/signup")}>Регистрация</button> 
         </div>
      </>
    )   
  }