import { useQuery } from '@tanstack/react-query';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { searchProducts } from '../../api/products';
import { NoSearch } from '../../components/NoSearch/NoSearch';
import { useAutorization } from '../../hooks/useAutorization';
import { addToBasket } from '../../redux/slices/basket';
import { addToFavorites } from '../../redux/slices/favorites';
import style from './style.module.css'

export function Main() {

    const navigate = useNavigate();
    const dispatch = useDispatch()

    const { token } = useAutorization()
    const { search } = useSelector(state => state.filter)

    const { data: products, isLoading, isError, error } = useQuery({
        queryKey: ['searchProducts', search],
        queryFn: async () => {
            const res = await searchProducts(token, search);
            if (res.ok) {
                return await res.json();
            } 
        }
      })

      if (isLoading) return <p>Загрузка...</p>

      if (error) return <p>Произошла ошибка: </p> + error.message

    return (
        <section className={style.main}>
            {products.length ?
            products.map(oneProduct =>
                <div className={style.card}>
                    <button className={style.btn_favorites} onClick={() => dispatch(addToFavorites(oneProduct._id))}></button>
                    <div className={style.picture}>
                        <img alt="" src={oneProduct.pictures} />
                    </div>
                    <p> {oneProduct.name} </p>
                    <div >
                        <h3 className={style.normal__price}>{oneProduct.price} ₽</h3>
                    </div>
                    <button className={style.btn_basket} onClick={() => dispatch(addToBasket(oneProduct._id))}>В корзину</button>
                    
                </div>
            ):<NoSearch />}
        </section>
    )   
}