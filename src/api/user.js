
// Регистрация пользователя
export const signup = async (newUser) => {
    const res = await fetch('https://api.react-learning.ru/signup', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newUser)
    });

    if (res.ok) {
        return true;
    } else {
        const response = await res.json();
        throw new Error(response.message);
        
    }
}

// Авторизация пользователя
export const signin = async (valuesSignIn) => {
   return fetch('https://api.react-learning.ru/signin', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(valuesSignIn)
    })

}

// Информация о пользователе
export const userProfile = (token) => {
    return fetch('https://api.react-learning.ru/v2/9-gr/users/me', {   
        method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token
            }, 
    })
}

