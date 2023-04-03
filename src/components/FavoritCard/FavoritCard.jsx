import { useDispatch } from 'react-redux';
import style from './style.module.css'
import { deleteProductInFavorites } from '../../redux/slices/favorites';

export function FavoritCard({ product }){
    const dispatch = useDispatch();

 
  const deleteOneProduct = () => {
    dispatch(deleteProductInFavorites(product._id));
  };

    return (
      <>
         <div className={style.container}>
            <div className={style.card}>
                <div className={style.picture}>
                    <img alt="" src={product.pictures} />
                </div>
                <div className={style.name}>
                    {product.name}
                </div>
                <div className={style.delete} onClick={deleteOneProduct}></div> 
            </div>
         </div>
      </>
    )   
  }