import style from './style.module.css'
import { useNavigate } from "react-router-dom";

export function ProductsButton() {

    const navigate = useNavigate();

    return (
        <>
             <button className={style.button_ProductsButton} onClick={() => navigate("/main")}></button> 
        </>
    )   
}