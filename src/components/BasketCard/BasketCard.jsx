
import { products } from '../../api/products'
import style from './style.module.css'


export function BasketCard({ product }){
    return (
      <>
         <div className={style.container}>
            <div className={style.picture}>
                <img alt="" src={product.pictures} />
            </div>
            <div className={style.name}>
                {product.name}
            </div>
            <div className={style.price}>
                {product.price} ₽
            </div>
         </div>
      </>
    )   
  }