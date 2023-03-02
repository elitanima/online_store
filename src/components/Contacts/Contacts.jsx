
import style from './style.module.css'
// import { useNavigate } from "react-router-dom";
import { useState } from 'react';
import { Contacts_view } from '../Contacts_view/Contacts_view';

export function Contacts() {

    // const navigate = useNavigate();

    return (
        <>
            <div className={style.contacts_view}>

                <a href="https://github.com/elitanima" >
                <button className={style.contacts_github} ></button> 
                </a>
                <a href="https://vk.com/elitanima" >
                <button className={style.contacts_vk} ></button>
                </a>
                <a href="https://t.me/elitanima" >
                <button className={style.contacts_telegram} ></button>
                </a>
                <a href="mailto: elitanima@vk.com" >
                <button className={style.contacts_email}></button>
                </a>
            
            </div>
        </>
    )   
}