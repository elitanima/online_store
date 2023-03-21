
import { AccountButton } from '../AccountButton/AccountButton'
import { Search } from '../Search/Search'
import style from './style.module.css'


export function Header() {

    return (
        <header className={style.header}>
            <Search />
            <AccountButton />
        </header>
    )   
}