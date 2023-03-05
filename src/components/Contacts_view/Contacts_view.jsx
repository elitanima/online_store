//страница отображения контактов

import { Contacts_module } from './Contacts_module/Contacts_module'
import style from './style.module.css'

// import { useNavigate } from "react-router-dom";


export function Contacts_view( { openContacts_view, setContacts_view }) {

    // const navigate = useNavigate();

    return (
        <div className={style.end_modal}>  
             <div className={style.modal}>
                <div className={style.contact_grid}>
                    <Contacts_module />
                </div>
                
                <div className={style.button_close_grid}>
                    <span className={style.button_close} onClick={() => { setContacts_view(!openContacts_view) }}></span>
                </div>
                       
            </div>
        </div>
    )   
}