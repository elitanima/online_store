import { AccountButton } from '../../components/AccountButton/AccountButton'
import { Footer } from '../../components/Footer/Footer'
import { Header } from '../../components/Header/Header'
import style from './style.module.css'

export function Basket() {
    return (
        <div className={style.container}>
            <div className={style.screen_view}>
                <Header />
                    <div className={style.basket}>
                        <h1>Корзина</h1>
                    </div>
                <Footer />
            </div> 
        </div>
    )   
}