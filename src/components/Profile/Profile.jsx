import { Header } from '../Header/Header'
import style from './style.module.css'

export function Profile() {
    return (
        <div className={style.profile}>
           <div className='screenView'>
        <Header />
      </div>
        </div>
    )   
}