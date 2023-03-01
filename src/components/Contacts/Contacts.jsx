import style from './style.module.css'
import { useNavigate } from "react-router-dom";

export function Contacts() {

    const navigate = useNavigate();

    return (
        <div className={style.contacts_view}>
           <button className={style.contacts_github} onClick={() => navigate("/contacts")}></button> 
           <button className={style.contacts_vk} onClick={() => navigate("/contacts")}></button> 
           <button className={style.contacts_email} onClick={() => navigate("/contacts")}></button> 
        </div>
    )   
}