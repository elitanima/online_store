
import style from './style.module.css'
import { All_contacts } from '../All_contacts/All_contacts'


export function Header() {

    

    return (
        <header className={style.header}>
           <All_contacts />
        </header>
    )   
}