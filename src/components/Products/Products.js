
import style from './style.module.css'
import { useNavigate } from "react-router-dom";

export function Products() {

    const navigate = useNavigate();

    return (
        <>
             <button className={style.button_products} onClick={() => navigate("/main")}></button> 
        </>
    )   
}