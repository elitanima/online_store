
export const getInitialValues = () => {

    return {
        filter: initialFilterState,
        basket: initialBasketState
    }
}

export const initialUserState = {
    token:'',
    name:'',
    about:'',
    avatar:'',
    _id:'',
    email:'',
    group:'',
    __v: 0
}

export const initialFilterState = {
    search: ''
}

export const initialBasketState = []