
export const products = (token) => {
    return fetch('https://api.react-learning.ru/products', {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
  }

export const searchProducts = (token, search) => {
    return fetch(`https://api.react-learning.ru/products/search?query=${search}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
  }

export const getCurrentProduct = ( token, id) => {
  return fetch (`https://api.react-learning.ru/products/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  })
}