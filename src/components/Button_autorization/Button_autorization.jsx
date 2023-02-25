
import style from './style.module.css'

import { useNavigate } from "react-router-dom";


export function Button_autorization(){

  const navigate = useNavigate();
 
    return (
      <>
         <div className={style.button_view}>
           <button className={style.button} onClick={() => navigate("/singin")}>Вход</button> 
           <button className={style.button} onClick={() => navigate("/singup")}>Регистрация</button> 
         </div>
      </>
    )   
  }