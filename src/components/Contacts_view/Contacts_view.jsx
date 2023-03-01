//страница отображения контактов

import style from './style.module.css'

import { useNavigate } from "react-router-dom";


export function Contacts_view() {

    const navigate = useNavigate();

    return (
        <div className={style.hidden}>
            <div className={style.end_modal_avtorization}>  
                <div className={style.modal}>
                        <span className={style.form_data} data-btn="formAutorizationClose" onClick={() => navigate("/")}>Отмена</span>
                </div>
            </div>
        </div>
    )   
}