
import style from './style.module.css'


export function Authorization_window({ setOpenAutorization_window }) {
    console.log(setOpenAutorization_window)
    return (
        <div className={style.hidden} data-modal="id_modal_add_god">
            <div className={style.end_modal_avtorization}>  
                <div className={style.modal}>
                    <form className={style.form_avtorization} name="form_add_god" id="formAddGod"> 
                        <input className={style.form_data} type="email" name="email" id="email" placeholder="Email"></input>
                        <input className={style.form_data} type = "password" name="userPassword" id="userPassword" placeholder="Введите пароль" min="1"></input>
                        <button className={style.form_data} data-btn="entry">Войти</button>
                        <span className={style.form_data} data-btn="formAutorizationClose">Отмена</span>
                    </form>
                </div>
            </div>
        </div>
    )   
}