import { useQuery } from "@tanstack/react-query"
import { useParams } from "react-router"
import { Link } from "react-router-dom";
import { getCurrentProduct } from '../../api/products';
import { CardSinglProduct } from "../../components/CardSinglProduct/CardSinglProduct";
import { Footer } from "../../components/Footer/Footer";
import { Header } from "../../components/Header/Header";
import { useAutorization } from "../../hooks/useAutorization";
import style from './style.module.css'

export const CurrentProduct = () => {
    const { token } = useAutorization()
    const{ idOfProduct } = useParams()

    const { data: CurrentProduct, isError, isLoading, error} = useQuery({
        queryKey:['getCurrentProduct'],
        queryFn: async () => {
            const res = await getCurrentProduct(token, idOfProduct)
            return await res.json()
        }
    })

    if (isLoading) return <p>Загрузка...</p>

    if (isError) return <p>Произошла ошибка: </p> + error.message

    return(
        <div className={style.container}>
        <div className={style.screen_view}>
            <Header/>
                <div className={style.CardProduct}>
                    <CardSinglProduct oneProduct={CurrentProduct}/>
                    <Link to={'/main'} >Каталог продуктов</Link>
                </div>
            <Footer />
        </div> 
        </div>
       
    ) 
}



