import { Account_module } from '../Account_module/Account_module'
import { Footer } from '../Footer/Footer'
import { Header } from '../Header/Header'
import style from './style.module.css'

export function Profile() {
    return (
        <div className={style.container}>
            <div className={style.screenView}>
                <Header />
                    <div className={style.profile}>
                        <h1>Личный кабинет</h1>
                    </div>
                <Footer />
            </div> 
            <div className='authorization'>
                    <Account_module />
            </div>
        </div>
    )   
}