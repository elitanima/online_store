import { Contacts } from '../Contacts/Contacts'
import style from './style.module.css'

export function Footer() {
    return (
        <footer className={style.footer}>
           <Contacts />
        </footer>
    )   
}