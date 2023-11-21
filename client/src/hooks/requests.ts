import axios from 'axios'

const instance = axios.create({
    baseURL: 'http://localhost:3000',
    timeout: 2000,
})


async function httpRegisterUser(user: User) {
    const { data, status } = await instance({
        method: 'POST',
        url: '/account',
        data: user
    })

    if (status === 200 || status === 201) {
        return data
    }

    // TODO handle error
    throw new Error('Error registering user')
}


export {
    httpRegisterUser
}