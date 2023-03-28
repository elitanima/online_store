import { useQuery } from '@tanstack/react-query'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router'
import { getCurrentProduct } from '../../api/products'
import { BasketCard } from '../../components/BasketCard/BasketCard'
import { FavoritCard } from '../../components/FavoritCard/FavoritCard'
import { Footer } from '../../components/Footer/Footer'
import { Header } from '../../components/Header/Header'
import { useAutorization } from '../../hooks/useAutorization'
import style from './style.module.css'

export function Favorites() {
    const { token } = useAutorization()

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const favorites = useSelector(state => state.favorites)
    console.log(favorites);
    const {data, isLoading, isError, error} = useQuery({
        queryKey: ['getBasketProduct', favorites, token],
        queryFn: async () => {
            return await Promise.allSettled(
             favorites.map(element => getCurrentProduct(token, element.id)
             .then(res =>res.json())))
             .then(res => res.map(element => element.value))
         }
    })

    if (isLoading) return  <div className={style.container}>
    <div className={style.screen_view}>
        <Header />
            <div className={style.basket}>
                <h1>Загрузка</h1>
            </div>
        <Footer />
    </div> 
</div>

if (error) return <p>Произошла ошибка: </p> + error.message

    return (
        <div className={style.container}>
            <div className={style.screen_view}>
                <Header />
                    <div className={style.favorites}>  
                        {data.map(product => <FavoritCard key={product._id} product = {product} />)}
                    </div>
                <Footer />
            </div> 
        </div>
    )   
}