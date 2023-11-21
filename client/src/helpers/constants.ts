export const URL = 'http://localhost:3000';

export const token = () => {
    const token = localStorage.getItem('token')
    return token != undefined ? token : ''
}