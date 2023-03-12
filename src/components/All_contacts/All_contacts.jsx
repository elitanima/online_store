
import style from './style.module.css'
// import { useNavigate } from "react-router-dom";
import { useState } from 'react';
import { ButtonClose } from '../Contacts_modal/ButtonClose';
import { Products } from '../Products/Products';

export function All_contacts() {

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
            <div className={style.all_ButtonClose}>
                 <Products /> 
                <button className={style.all_contacts} onClick={() => {
                setButtonClose(!openButtonClose);
                }}></button>
               
            </div>
        </>
    )   
}