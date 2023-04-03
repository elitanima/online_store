import { useDispatch } from 'react-redux';
import style from './style.module.css'
import { addToBasket } from "../../redux/slices/basket";
import { addToFavorites } from '../../redux/slices/favorites';

export function CardSinglProduct({ oneProduct }){
    const dispatch = useDispatch();
  
    return (
      <>
       <div className={style.card} >
            <button className={style.btn_favorites} onClick={() => dispatch(addToFavorites(oneProduct._id))}></button>
            <div className={style.picture}>
              <img alt="" src={oneProduct.pictures} />
            </div>
              <p> {oneProduct.name} </p>
            <div>
              <p>{oneProduct.description}</p>
            </div>
            <div>
              <p> Количество {oneProduct.stock} шт.</p>
            </div>
            <div >
              <h3 className={style.normal__price}>{oneProduct.price} ₽</h3>
            </div>
            <button className={style.btn_basket} onClick={() => dispatch(addToBasket(oneProduct._id))}>В корзину</button>
                    
        </div>
      </>
    )   
  }