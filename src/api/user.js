
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
        console.log("WARNING");
        const response = await res.json();
        throw new Error(response.message);
        
    }
}

// Авторизация пользователя
export const signin = async (valuesSignIn) => {
    const res = await fetch('https://api.react-learning.ru/signin', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(valuesSignIn)
    })

    if (res.ok) {
        const response = await res.json();
        localStorage.setItem('token', response.token);
        console.log(response);

        return true;
    } else {
        const response = await res.json();
        throw new Error(response.message);

    }
}

// Информация о пользователе
export const user = (token) => {
    return fetch('https://api.react-learning.ru/v2/9-gr/users/me', {   
        method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token
            }, 
    })
}

