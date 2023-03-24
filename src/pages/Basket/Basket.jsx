import { useQuery } from '@tanstack/react-query'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router'
import { getCurrentProduct } from '../../api/products'
import { BasketCard } from '../../components/BasketCard/BasketCard'
import { Footer } from '../../components/Footer/Footer'
import { Header } from '../../components/Header/Header'
import { useAutorization } from '../../hooks/useAutorization'
import style from './style.module.css'

export function Basket() {
    const { token } = useAutorization()
    const basket = useSelector(state => state.basket)
    const {data, isLoading, isError, error} = useQuery({
        queryKey: ['getBasketProduct', basket, token],
        queryFn: async () => {
            return await Promise.allSettled(
             basket.map(element => getCurrentProduct(token, element.id)
             .then(res =>res.json())))
             .then(res => res.map(element => element.value))
         }
    })

    const navigate = useNavigate()
    const dispatch = useDispatch()
    
    // getCurrentProduct

    if (isLoading) return <p>Загрузка...</p>

    if (error) return <p>Произошла ошибка: </p> + error.message
    return (
        <div className={style.container}>
            <div className={style.screen_view}>
                <Header />
                    <div className={style.basket}>
                        <h1>Корзина</h1>
                        <div className={style.wraper}>
                        {data.map(product => <BasketCard key={product._id} product = {product} />)}
                        </div>
                    </div>
                <Footer />
            </div> 
        </div>
    )   
}