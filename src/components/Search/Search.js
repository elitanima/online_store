import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { useDebounce } from '../../hooks/useDebounce'
import { changeSearchValue } from '../../redux/slices/filter'
import style from './style.module.css'

export const Search = () => {
    const [searchParams] = useSearchParams()   
    const [value, setValue] = useState(() => {
       const inputSearchValue = searchParams.get('search')
       return inputSearchValue ? inputSearchValue : ''
    })
    
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const debounceValue = useDebounce(value, 500)

    useEffect(() => {
        dispatch(changeSearchValue(debounceValue))
    },[debounceValue, dispatch])

    const handleChange = (event) => {
        setValue(event.target.value)

        if(event.target.value) {
            return navigate({
                pathname: '/main',
                search: `?search=${event.target.value}` 
            })
        }
       return navigate('/main')
    }

    return <input type='text' placeholder='Поиск' className={style.search} value={value} onChange = {handleChange} />
}