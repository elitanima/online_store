import style from './style.module.css'

export function Button_autorization() {
    return (
        <div className={style.button_view}>
          <button className={style.button}>Вход</button> 
          <button className={style.button}>Регистрация</button> 
        </div>
    )   
}