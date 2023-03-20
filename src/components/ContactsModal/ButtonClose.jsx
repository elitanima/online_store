//страница отображения контактов //переписать на порталы

import { Modal } from './Modal/Modal'
import style from './style.module.css'

export function ButtonClose( { openButtonClose, setButtonClose }) {

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