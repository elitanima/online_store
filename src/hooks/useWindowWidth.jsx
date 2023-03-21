import { useEffect, useState } from "react"

export const useWindowWidth = () => {
    const [windowWidth, setWindowWidth] = useState(undefined)

    useEffect(()=> {
        const handleResize = () => setWindowWidth(window.innerWidth)
            handleResize()
            window.addEventListener('resize', handleResize)
        return  () => window.removeEventListener('resize', handleResize)
        }, []);

        return windowWidth
    }