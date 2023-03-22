
export const getInitialValues = () => {

    return {
        filter: initialFilterState
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