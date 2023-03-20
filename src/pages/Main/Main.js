import { useQuery } from '@tanstack/react-query';
import { products } from '../../api/products';
import { useAutorization } from '../../hooks/useAutorization';
import style from './style.module.css'

export function Main() {

    const { token } = useAutorization()

    const { data, isLoading, isError, error } = useQuery({
        queryKey: ['products'],
        queryFn: async () => {
            const res = await products(token);
            if (res.ok) {
                return await res.json();
            } 
        }
      })

      if (isLoading) return <p>Загрузка...</p>

      if (error) return <p>Произошла ошибка: </p> + error.message

    return (
        <section className={style.main}>
            {data.products.map(oneProduct =>
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
            )}
        </section>
    )   
}