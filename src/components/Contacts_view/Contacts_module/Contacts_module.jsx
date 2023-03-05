//Модуль контактов

import style from './style.module.css'


export function Contacts_module() {

    return (
        
         
                <div >
                <div className={style.contacts_view_module}>
                    <a href="https://github.com/elitanima" >
                    <h4>Github</h4>
                    <button className={style.contacts_github} ></button>
                    </a>
                    <a href="https://vk.com/elitanima" >
                    <h4>Вконтакте</h4>
                    <button className={style.contacts_vk} ></button>
                    </a>
                    <a href="https://t.me/elitanima" >
                    <h4>Телеграм</h4>
                    <button className={style.contacts_telegram} ></button>
                    </a>
                    <a href="mailto: elitanima@vk.com" >
                    <h4>Почта</h4>
                    <button className={style.contacts_email}></button>
                    </a>
                </div>
                </div>
        
            
        
        
        
    
    )   
}