
import style from './style.module.css'
// import { useNavigate } from "react-router-dom";
import { useState } from 'react';
import { Contacts_view } from '../Contacts_view/Contacts_view';

export function Contacts() {

    // const navigate = useNavigate();

    //модальное окно контакты
    const [openContacts_view, setContacts_view] = useState();
    let contactsModal;
    if (openContacts_view){ 
        contactsModal = <Contacts_view openContacts_view={openContacts_view} setContacts_view={setContacts_view} />
      }
    // --END--

    return (
        <>
            {contactsModal}
            <div className={style.contacts_view}>
                <button className={style.contacts_contacts} onClick={() => {
                setContacts_view(!openContacts_view);
                }}></button> 
                
                <a href="https://github.com/elitanima" >
                <button className={style.contacts_github} ></button> 
                </a>
                <a href="https://vk.com/elitanima" >
                <button className={style.contacts_vk} ></button>
                </a>
                <a href="https://t.me/elitanima" >
                <button className={style.contacts_telegram} ></button>
                </a>
                <a href="mailto: elitanima@vk.com" >
                <button className={style.contacts_email}></button>
                </a>
            
            </div>
        </>
    )   
}