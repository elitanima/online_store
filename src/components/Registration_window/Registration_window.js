
//Singup регистрация пользователя

import style from './style.module.css';

import { useNavigate } from "react-router-dom";

export function Registration_window() {

    const navigate = useNavigate();

    return (
        <div className={style.hidden} data-modal="id_modal_add_god">
            <div className={style.end_modal_registration}>  
                <div className={style.modal}>
                    <form className={style.form_avtorization} name="form_add_god" id="formAddGod"> 
                        <input className={style.form_data} type="email" name="email" id="email" placeholder="Email"></input>
                        <input className={style.form_data} type = "password" name="userPassword" id="userPassword" placeholder="Придумайте пароль" min="1"></input>
                        <input className={style.form_data} type="text" name="group" id="group" placeholder="Группа"></input>
                        <button className={style.form_data} data-btn="entry">Регистрация</button>
                        <span className={style.form_data} data-btn="formAutorizationClose" onClick={() => navigate(-1)}>Отмена</span>
                    </form>
                </div>
            </div>
        </div>
    )   
}

// {/* <div className={style.hidden} data-modal="id_modal_add_god">
// <div className={style.end_modal_registration}>  
//     <div className={style.modal}>
        
//     </div>
// </div>
// </div> */}