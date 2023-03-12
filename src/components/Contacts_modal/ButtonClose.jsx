//страница отображения контактов

import { Modal } from './Modal/Modal'
import style from './style.module.css'

// import { useNavigate } from "react-router-dom";


export function ButtonClose( { openButtonClose, setButtonClose }) {

    // const navigate = useNavigate();

    return (
        <div className={style.end_modal}>  
             <div className={style.modal}>
                <div className={style.contact_grid}>
                    <Modal />
                </div>
                
                <div className={style.ButtonClose_grid}>
                    <span className={style.ButtonClose} onClick={() => { setButtonClose(!openButtonClose) }}></span>
                </div>
                       
            </div>
        </div>
    )   
}