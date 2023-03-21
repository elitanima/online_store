import { useEffect, useState } from "react";

export const useDebounce = (value, tm = 500) => {
    const [debounceValue, setDebounceValue] = useState(value)

    useEffect(()=> {
        const timoutId = setTimeout(() => {
            setDebounceValue(value)
        }, tm);

        return () => {
            clearTimeout(timoutId)
        }
    }, [tm, value])

    return debounceValue
}

