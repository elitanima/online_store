
import style from './style.module.css'
// import { useNavigate } from "react-router-dom";
import { useState } from 'react';
import { Contacts_view } from '../Contacts_view/Contacts_view';
import { Products } from '../Products/Products';

export function All_contacts() {

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
            <div className={style.all_contacts_view}>
                 <Products /> 
                <button className={style.all_contacts} onClick={() => {
                setContacts_view(!openContacts_view);
                }}></button>
               
            </div>
        </>
    )   
}