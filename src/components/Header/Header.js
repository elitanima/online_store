
import { AccountButton } from '../AccountButton/AccountButton'
import style from './style.module.css'



export function Header() {

    

    return (
        <header className={style.header}>   
            <AccountButton />
        </header>
    )   
}