
import { useQuery } from '@tanstack/react-query';
import { userProfile } from "../../api/user"
import { Footer } from '../../components/Footer/Footer';
import { Header } from '../../components/Header/Header';
import { useAutorization } from '../../hooks/useAutorization';
import style from './style.module.css'

export function Profile() {

    const { token } = useAutorization()

    const { data, isLoading, isError, error } = useQuery({
        queryKey: ['userProfile'],
        queryFn: async () => {
            const res = await userProfile(token);
                if (res.ok) {
                    return await res.json();
                } 
        }
      })

      if (isLoading) return <p>Загрузка...</p>

      if (error) return <p>Произошла ошибка: </p> + error.message

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