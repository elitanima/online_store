
import { useEffect, useState } from 'react'
import { Footer } from '../Footer/Footer'
import { Header } from '../Header/Header'
import { userProfile } from "../../api/user"
import style from './style.module.css'
import { AccountButton } from '../AccountButton/AccountButton'

export function Profile() {

    const [data, setData] = useState({});


     // Отрываем страницу профиля
        const goToUser = async (token) => {
        const res = await userProfile(token);
        const data = await res.json();
       
    }
    

    useEffect(()=> {

        const token = localStorage.getItem('token');

        const fetchData = async ()=>{
            const res = await userProfile(token);
            if (res.ok) {
                const response = await res.json();
                console.log(response);
                
                return setData(response);
            } 
                throw new Error('что то пошло не по плану');
        }
        fetchData()
    },[])


    return (
        <div className={style.container}>
            <div className={style.screen_view}>
                <Header />
                    <div className={style.profile} id='profile'>
                        <h1>Личный кабинет</h1>
                     <div className={style.picture}>
                    <img alt="" src={data.avatar} />
                    </div>
                      {data.name}
                      {data.about}
                      {data.email}
                    </div>
                <Footer />
            </div> 
            <div className='authorization'>
                    <AccountButton />
            </div>
        </div>
    )   
}