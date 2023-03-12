
import style from './style.module.css'
// import { useNavigate } from "react-router-dom";
import { useState } from 'react';
import { ButtonClose } from '../ContactsModal/ButtonClose';
import { ProductsButton } from '../ProductsButton/ProductsButton';

export function AllСontacts() {

    // const navigate = useNavigate();

    //модальное окно контакты
    const [openButtonClose, setButtonClose] = useState();
    let Modal;
    if (openButtonClose){ 
        Modal = <ButtonClose openButtonClose={openButtonClose} setButtonClose={setButtonClose} />
      }
    // --END--

    return (
        <>
            {Modal}
            <div className={style.all_button_close}>
                 <ProductsButton /> 
                <button className={style.all_contacts} onClick={() => {
                setButtonClose(!openButtonClose);
                }}></button>
               
            </div>
        </>
    )   
}