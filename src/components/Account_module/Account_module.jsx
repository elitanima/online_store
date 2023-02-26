

import style from './style.module.css'
import { useNavigate } from "react-router-dom";

export function Account_module() {
    
    const navigate = useNavigate();

    return (
         <div className={style.account_module}>
            <div className={style.button_view}>
                <button className={style.button_user} onClick={() => navigate("/user")}></button> 
                <button className={style.button_exit} onClick={() => navigate("/")}></button> 
         </div>
        </div>
    )   
}
