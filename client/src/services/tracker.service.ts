import { token, URL } from "../helpers/constants"


export const getTrackers = async () => {

    const res = await fetch(`${URL}/tracker`, {
        headers: {
            'Content-Type': 'application/json',
            'x-auth-token': token()
        }
    });

    const json = await res.json();

    return json;
};

export const createTracker = async (body: any) => {
    
    const res = await fetch(URL + '/tracker', {
        body:JSON.stringify(body),
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'x-auth-token': token()
        }
    });

    const json = await res.json();

    return json;
};

export const editTracker = async (idTracker: string, body: any) => {
    const res = await fetch(URL + '/tracker/' + idTracker, {
        body:JSON.stringify(body),
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'x-auth-token': token()
        }
    });

    const json = await res.json();

    return json;
};

export const deleteTracker = () => {
};
