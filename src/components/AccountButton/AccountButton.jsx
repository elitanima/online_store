

import style from './style.module.css'
import { useNavigate } from "react-router-dom";

import { ButtonClose } from '../ContactsModal/ButtonClose';
import { useState } from 'react';
import { ProductsButton } from '../ProductsButton/ProductsButton';
import { useSelector } from 'react-redux';



export function AccountButton() {
    
    const navigate = useNavigate();
    const basket = useSelector(state => state.basket)
   
      //модальное окно контакты //переписать на порталы
      const [openButtonClose, setButtonClose] = useState();
      let Modal;
      if (openButtonClose){ 
          Modal = <ButtonClose openButtonClose={openButtonClose} setButtonClose={setButtonClose} />
        }
      // --END--

    const exit = () => {
        localStorage.clear()
        navigate("/");
    }

    return (
            <>
            {Modal}
            <div className={style.button_view}>
                <ProductsButton /> 
                <button className={style.button_user} onClick={() => navigate("/profile")}></button> 
                <button className={style.button_basket} onClick={() => navigate("/basket")}><h3 className={style.basket_number}>{basket.length}</h3></button>
                <button className={style.button_favorites} onClick={() => navigate("/favorites")}><h3></h3></button>
                <button className={style.all_contacts} onClick={() => {setButtonClose(!openButtonClose)}}></button>
                <button className={style.button_exit} onClick={() => exit()}></button>
        
        </div>
        </>
    )   
}

