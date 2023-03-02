
import style from './style.module.css'
import { All_contacts } from '../All_contacts/All_contacts'
import { Products } from '../Products/Products'


export function Header() {

    

    return (
        <header className={style.header}>
            <Products />
           <All_contacts />
        </header>
    )   
}