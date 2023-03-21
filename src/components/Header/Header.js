
import { useLocation } from 'react-router'
import { AccountButton } from '../AccountButton/AccountButton'
import { Search } from '../Search/Search'
import style from './style.module.css'


export function Header() {
    const location = useLocation()
    return (
        <header className={style.header}>
            { location.pathname ==='/main' ? <Search /> :null }
            <AccountButton />
        </header>
    )   
}