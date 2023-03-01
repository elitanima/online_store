import style from './style.module.css'
import { useNavigate } from "react-router-dom";

export function Contacts() {

    const navigate = useNavigate();

    return (
        <div className={style.contacts_view}>
            <button className={style.contacts_github} onClick={() => navigate("/contacts")}></button> 
            <button className={style.contacts_vk} onClick={() => navigate("/contacts")}></button> 
            <button className={style.contacts_email} onClick={() => navigate("/contacts")}></button> 
            
            <a href="https://github.com/elitanima" className="nav-link d-inline" target="_blank" rel="noopener noreferrer">
            <button className={style.contacts_email}></button> 
            </a>
           
        </div>
    )   
}