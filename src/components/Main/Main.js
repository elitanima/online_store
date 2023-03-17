import { useEffect, useState } from 'react'
import style from './style.module.css'

export function Main() {

    const [data, setData] = useState({products: [], total: 0});

    useEffect(()=> {

        const token = localStorage.getItem('token');

        const fetchData = async ()=>{
            const res = await fetch('https://api.react-learning.ru/products', {
                headers: {
                    'Authorization': 'Bearer ' + token
                }, 
            })
            if (res.ok) {
                const response = await res.json();
                console.log(response);
                
                return setData(response);
            } 
                throw new Error('что то пошло не по плану');
        }
        fetchData()
    },[])

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