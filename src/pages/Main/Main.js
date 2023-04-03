import { useQuery } from '@tanstack/react-query';
import { useSelector } from 'react-redux';
import { searchProducts } from '../../api/products';
import { CardProduct } from '../../components/CardProduct/CardProduct';
import { NoSearch } from '../../components/NoSearch/NoSearch';
import { useAutorization } from '../../hooks/useAutorization';
import style from './style.module.css'

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
            products.map(oneProduct => {
                return <CardProduct oneProduct={oneProduct} key={oneProduct._id}/>
            }
            ):<NoSearch />}
        </section>
    )   
}