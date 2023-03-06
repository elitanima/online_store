import { Account_module } from '../Account_module/Account_module'
import { Footer } from '../Footer/Footer'
import { Header } from '../Header/Header'
import { user } from "../../api_user/api_user"
import style from './style.module.css'

export function Profile() {

   

    const token = localStorage.getItem('token')

     // Отрываем страницу профиля
        const goToUser = async (token) => {
        const res = await user(token);
        const data = await res.json();
        let $profile = document.querySelector('#profile');
        $profile.insertAdjacentHTML("beforeend", profilePage(data));
    }
    goToUser(token)

    // формирование html
let profilePage = (data) => 
`<div>
    <h3>${data.name}</h3>
    <h3>${data.about}</h3>
    <h3>${data.avatar}</h3>
</div>`
    
    return (
        <div className={style.container}>
            <div className={style.screenView}>
                <Header />
                    <div className={style.profile} id='profile'>
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