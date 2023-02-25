//singin авторизация

import style from './style.module.css'

import { useNavigate } from "react-router-dom";


export function Authorization_window() {

    const navigate = useNavigate();

    return (
        <div className={style.hidden}>
            <div className={style.end_modal_avtorization}>  
                <div className={style.modal}>
                    <form className={style.form_avtorization} name="form_add_god" id="formAddGod"> 
                        <input className={style.form_data} type="email" name="email" id="email" placeholder="Email"></input>
                        <input className={style.form_data} type = "password" name="userPassword" id="userPassword" placeholder="Введите пароль" min="1"></input>
                        <button className={style.form_data} data-btn="entry">Войти</button>
                        <span className={style.form_data} data-btn="formAutorizationClose" onClick={() => navigate("/")}>Отмена</span>
                    </form>
                </div>
            </div>
        </div>
    )   
}