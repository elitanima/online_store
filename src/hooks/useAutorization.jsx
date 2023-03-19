import { useEffect } from "react"
import { useNavigate } from "react-router"

export const useAutorization = () => {
    const token = localStorage.getItem('token')
    const navigate = useNavigate()
    useEffect(()=>{
        if(!token) navigate ('/signin')
    },[navigate, token])

    return { token }
}
