import style from './style.module.css'

export const Search = () => {
    return <input type='text' placeholder='Поиск' className={style.search} />
}