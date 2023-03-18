
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
                        <div className={style.user_description}>
                            <p>Имя</p>
                            <h2>{data.name}</h2>
                            <p>Описание</p>
                            <h4>{data.about}</h4>
                            <p>Группа</p>
                            <h4>{data.group}</h4>
                            <p>Почта</p>
                            <h4>{data.email}</h4> 
                        </div>
                    </div>
                <Footer />
            </div> 
        </div>
    )   
}