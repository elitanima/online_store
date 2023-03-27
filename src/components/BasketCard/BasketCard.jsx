
import { useDispatch, useSelector } from 'react-redux';
import { products } from '../../api/products'
import { Basket } from '../../pages/Basket/Basket';
import style from './style.module.css'
import {
    changeCount,
  } from "../../redux/slices/basket";

export function BasketCard({ product }){
    const dispatch = useDispatch();
    const products = useSelector((state) => state.basket); 
    console.log(products);

    // функция кол-ва штучек
  const counter = () => {
    let count = 0;
    for (let position of products) {
      if (position.id === product._id) {
        count = position.count;
      }
    }
    return count;
  };

  const count = counter();

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
                {product.price * count} ₽
            </div>
            <div className={style.minus}
            onClick={() => {
            dispatch(changeCount({ id: product._id, value: count - 1 }));
          }}></div>
          <div>{count}</div>
          <div className={style.plus}
          onClick={() => {
            dispatch(changeCount({ id: product._id, value: count + 1 }));
          }}></div>
         </div>
      </>
    )   
  }