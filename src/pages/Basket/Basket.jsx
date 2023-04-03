import { useQuery } from '@tanstack/react-query'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { getCurrentProduct } from '../../api/products'
import { BasketCard } from '../../components/BasketCard/BasketCard'
import { Footer } from '../../components/Footer/Footer'
import { Header } from '../../components/Header/Header'
import { useAutorization } from '../../hooks/useAutorization'
import { removeAllCart } from '../../redux/slices/basket'
import style from './style.module.css'

export function Basket() {
    const { token } = useAutorization()
    const basket = useSelector(state => state.basket)
    const {data, isLoading, isError, error} = useQuery({
        queryKey: ['getBasketProduct', basket.length, token],
        queryFn: async () => {
            return await Promise.allSettled(
             basket.map(element => getCurrentProduct(token, element.id)
             .then(res =>res.json())))
             .then(res => res.map(element => element.value))
         }
    })

    const dispatch = useDispatch()
    
    if (isLoading) return  <div className={style.container}>
                <div className={style.screen_view}>
                    <Header />
                        <div className={style.basket}>
                            <h1>Загрузка</h1>
                        </div>
                    <Footer />
                </div> 
            </div>

    if (isError) return <p>Произошла ошибка: </p> + error.message

    const deleteBasketCard = () => {
        dispatch(removeAllCart())
    }

    if (!basket.length) {
        return (
            <div className={style.container}>
                <div className={style.screen_view}>
                    <Header />
                        <div className={style.basket}>
                            <h1>Корзина пуста</h1>
                            <Link to={'/main'} >Каталог продуктов</Link>
                        </div>
                    <Footer />
                </div> 
            </div>
        )   
    }
    return (
        <div className={style.container}>
            <div className={style.screen_view}>
                <Header deleteBasketCard={deleteBasketCard}/>
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