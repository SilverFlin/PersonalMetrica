import axios from 'axios'
import { MyJwtPayload, decodeToken } from '../utils/jwt'
import { token } from '../helpers/constants'

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

async function httpGetUserFromToken(token: string): Promise<User | null> {

    console.log('token', token)
    let myJwtPayload: MyJwtPayload | null;
    try {
        myJwtPayload = await decodeToken(token)
    } catch (e) {
        console.log(e)
        return null
    }

    console.log(myJwtPayload)

    const { data, status } = await instance({
        method: 'GET',
        url: `/account/`
    })

    if (status === 200 || status === 201) {
        return data
    }

    return null

}


 async function httpGetTrackers() {
    const { data } = await instance({
        method: 'GET',
        url: '/tracker',
        headers: {
            'Content-Type': 'application/json',
            'x-auth-token': token()
        }
    });

    return data;
}

 async function httpCreateTracker(body: any) {
    const { data } = await instance({
        method: 'POST',
        url: '/tracker',
        data: body,
        headers: {
            'Content-Type': 'application/json',
            'x-auth-token': token()
        }
    });

    return data;
}

 async function httpEditTracker(idTracker: string, body: any) {
    const { data } = await instance({
        method: 'PUT',
        url: `/tracker/${idTracker}`,
        data: body,
        headers: {
            'Content-Type': 'application/json',
            'x-auth-token': token()
        }
    });

    return data;
}

 async function httpDeleteTracker(idTracker: string) {
    const { data } = await instance({
        method: 'DELETE',
        url: `/tracker/${idTracker}`,
        headers: {
            'Content-Type': 'application/json',
            'x-auth-token': token()
        }
    });

    return data;
}



export {
    httpRegisterUser,
    httpLoginUser,
    httpGetUserFromToken,
    httpGetTrackers,
    httpCreateTracker,
    httpEditTracker,
    httpDeleteTracker
};