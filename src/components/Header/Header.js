

import { useLocation } from 'react-router'
import { removeAllCart } from '../../redux/slices/basket'
import { AccountButton } from '../AccountButton/AccountButton'
import { Search } from '../Search/Search'
import style from './style.module.css'



export function Header( { deleteBasketCard }) {
    const location = useLocation()
    return (
        <header className={style.header}>
            { location.pathname ==='/main' ? <Search /> :null }
            { location.pathname ==='/basket' ? <button className={style.button} onClick={()=> deleteBasketCard()}>Удалить всё</button> :null }
            
            <AccountButton />
           
        </header>
    )   
}