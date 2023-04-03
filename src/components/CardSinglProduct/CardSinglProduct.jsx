
import { useDispatch, useSelector } from 'react-redux';
import style from './style.module.css'
import { addToBasket } from "../../redux/slices/basket";
import { addToFavorites } from '../../redux/slices/favorites';
import { useNavigate } from 'react-router';

export function CardSinglProduct({ oneProduct }){
    const dispatch = useDispatch();
    const navigate = useNavigate()
  
    const handleAddToBasket = (event) => {
      event.stopPropagation()
      dispatch(addToBasket(oneProduct._id))
    }

    const handleAddToFavorites = (event) => {
      event.stopPropagation()
      dispatch(addToFavorites(oneProduct._id))
    }
    return (
      <>
       <div className={style.card} onClick={() => navigate(oneProduct._id)}>
            <button className={style.btn_favorites} onClick={(event) => handleAddToFavorites(event)}></button>
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
            <button className={style.btn_basket} onClick={(event) => handleAddToBasket(event)}>В корзину</button>
                    
        </div>
      </>
    )   
  }