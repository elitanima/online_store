
// export const getInitialValues = () => {

//     return {
//         filter: initialFilterState,
//         basket: initialBasketState
//     }
// }

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

export const initialFavoritesState = []

export const getInitialValuesLocalStorage = () => {
    const lc_store = localStorage.getItem('reduxState')
  
    if (lc_store) {
      return JSON.parse(lc_store)
    }
  
    return {
      user: initialUserState,
      basket: initialBasketState,
      favorites: initialFavoritesState
    }
  }