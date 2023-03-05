

import style from './style.module.css'
import { useNavigate } from "react-router-dom";

export function Account_module() {
    
    const navigate = useNavigate();

    const exit = () => {
        localStorage.clear()
        navigate("/");
    }

    return (
         <div className={style.account_module}>
            <div className={style.button_view}>
                <button className={style.button_user} onClick={() => navigate("/profile")}></button> 
                <button className={style.button_basket} onClick={() => navigate("/basket")}></button>
                <button className={style.button_exit} onClick={() => exit() }></button>
         </div>
        </div>
    )   
}

