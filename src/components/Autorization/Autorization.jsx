
import { Button_autorization } from '../Button_autorization/Button_autorization'
import style from './style.module.css'

export function Autorization() {
    
    return (
        <div className={style.end_modal}>
             <div className={style.modal}>
                <div className={style.autorization}>
                <Button_autorization />
                </div>
            </div>
        </div>
    )   
}
