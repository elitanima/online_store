
import style from './style.module.css'
import { AllСontacts } from '../AllСontacts/AllСontacts'


export function Header() {

    

    return (
        <header className={style.header}>
           <AllСontacts />
        </header>
    )   
}