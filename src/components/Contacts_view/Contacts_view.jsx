//страница отображения контактов

import style from './style.module.css'

import { useNavigate } from "react-router-dom";


export function Contacts_view() {

    const navigate = useNavigate();

    return (
        <div className={style.end_modal}>  
             <div className={style.modal}>
                <div className={style.form_avtorization}>
                    <span className={style.form_data} data-btn="formAutorizationClose" onClick={() => navigate(-1)}>Назад</span>
                </div>
                       
            </div>
        </div>
    )   
}