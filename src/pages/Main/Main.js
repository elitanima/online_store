import { useQuery } from '@tanstack/react-query';
import { useSelector } from 'react-redux';
import { searchProducts } from '../../api/products';
import { useAutorization } from '../../hooks/useAutorization';
import style from './style.module.css'

const NoSearch = () => {
    return <h2>По вашему запросу ничего не найдено</h2>
}

export function Main() {

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
                    <div className={style.picture}>
                        <img alt="" src={oneProduct.pictures} />
                    </div>
                    <p> {oneProduct.name} </p>
                    <div >
                        <h3 className={style.normal__price}>{oneProduct.price} ₽</h3>
                    </div>
                    <button className={style.btn_basket}>В корзину</button>
                </div>
            ):<NoSearch />}
        </section>
    )   
}