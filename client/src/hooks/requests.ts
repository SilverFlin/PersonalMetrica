import axios from 'axios'
import { token } from '../helpers/constants'
import { UserProfile } from '../views/ProfilePage'

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

function logoutUser() {
    sessionStorage.removeItem("token");
}

async function httpGetUserFromToken(token: string): Promise<UserProfile> {

    console.log('token', token)
    return new Promise(async (resolve, reject) => {
        if (!token) reject(new Error('Token not found'))

        instance({
            method: 'GET',
            url: `/account/profile`,
            headers: {
                'Content-Type': 'application/json',
                'x-auth-token': token
            }
        }).then((response) => {
            if (response.status === 200 || response.status === 201) {
                resolve(response.data)
            }
        }).catch((error) => {
            reject(error)
        })



    })

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
    httpDeleteTracker,
    logoutUser
};