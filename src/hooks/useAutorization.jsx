import { useEffect } from "react"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router"

export const useAutorization = () => {
    const { token } = useSelector(state => state.user)
    const navigate = useNavigate()
    useEffect(()=>{
        if(!token) navigate ('/signin')
    },[navigate, token])

    return { token }
}
