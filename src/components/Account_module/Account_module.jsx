

import style from './style.module.css'
import { useNavigate } from "react-router-dom";

import { user } from "../../api_user/api_user"

export function Account_module() {
    
    const navigate = useNavigate();
    const token = localStorage.getItem('token')

     // Отрываем страницу профиля
        const goToUser = async (token) => {
        const res = await user(token);
        const data = await res.json();
        console.log(data);
        navigate("/profile")
    }
    

    const exit = () => {
        localStorage.clear()
        navigate("/");
    }

    return (
         <div className={style.account_module}>
            <div className={style.button_view}>
                <button className={style.button_user} onClick={() => goToUser(token)}></button> 
                <button className={style.button_basket} onClick={() => navigate("/basket")}></button>
                <button className={style.button_exit} onClick={() => exit() }></button>
         </div>
        </div>
    )   
}

