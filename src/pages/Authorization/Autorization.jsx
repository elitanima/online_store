
import { ButtonAutorization } from '../../components/ButtonAutorization/ButtonAutorization'
import style from './style.module.css'

export function Autorization() {
    
    return (
        <div className={style.end_modal}>
             <div className={style.modal}>
                <div className={style.autorization}>
                <ButtonAutorization />
                </div>
            </div>
        </div>
    )   
}
