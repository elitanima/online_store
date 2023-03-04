
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

        return true;
    } else {
        const response = await res.json();
        throw new Error(response.message);

    }

}