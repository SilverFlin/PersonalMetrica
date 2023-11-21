import axios from 'axios'

const instance = axios.create({
    baseURL: 'http://localhost:3000',
    timeout: 2000,
})


async function httpRegisterUser(user: User): Promise<User> {
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

async function httpLoginUser(user: User): Promise<string> {
    const { data, status } = await instance({
        method: 'POST',
        url: '/auth/login',
        data: user
    })

    if (status === 200 || status === 201) {
        return data.token
    }

    // TODO handle error
    throw new Error('Error registering user')
}


export {
    httpRegisterUser,
    httpLoginUser
}