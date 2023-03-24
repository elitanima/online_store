import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router'
import { Footer } from '../../components/Footer/Footer'
import { Header } from '../../components/Header/Header'
import { useAutorization } from '../../hooks/useAutorization'
import style from './style.module.css'

export function Favorites() {
    const { token } = useAutorization()

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const favorites = useSelector(state => state.basket)

    return (
        <div className={style.container}>
            <div className={style.screen_view}>
                <Header />
                    <div className={style.favorites}>
                        <h1>Избранное</h1>
                    </div>
                <Footer />
            </div> 
        </div>
    )   
}