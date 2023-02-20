import { Authorization_window } from '../Authorization_window/Authorization_window';
import { useState } from 'react';
import style from './style.module.css'
import { Registration_window } from '../Registration_window/Registration_window';


export function Button_autorization(){
  const [openAutorization_window, setOpenAutorization_window] = useState();
  const [openRegistration_window, setOpenRegistration_window] = useState();
  
  let avtorizationModal;
  let registrationModal;
  if (openAutorization_window){ 
    avtorizationModal = <Authorization_window />
  }

  if (openRegistration_window){ 
    registrationModal = <Registration_window />
  }
    return (
      <>
        {avtorizationModal}
        <div className={style.button_view}>
          <button className={style.button} onClick={() => {
                setOpenAutorization_window(!openAutorization_window);
                }}>Вход</button> 
          <button className={style.button}>Регистрация</button> 
        </div>
      </>
    )   
  }