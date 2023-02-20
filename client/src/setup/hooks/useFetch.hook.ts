export class useFetch {
    get = async (url: string, token?: string) => {
        const response = await fetch(url, {
            headers: {
                'Accept': 'application/json',
                'Content-type': 'application/json; charset=UTF-8',
                'Authorization': 'Bearer ' + token,
            }
        });
        const responseJSON = await response.json();
        return responseJSON;
    };

    post = async (url: string, credentials: any, token? : string) => {
        const response = await fetch(url, {
            headers: {
                'Accept': 'application/json',
                'Content-type': 'application/json; charset=UTF-8',
                'Authorization': 'Bearer ' + token,
            },
            method: 'POST',
            body: JSON.stringify(credentials)
        });
        const responseJSON = await response.json();
        return responseJSON;
    };

    patch = async (url: string, credentials: Object) => {
        const response = await fetch(url, {
            headers: {
                'Accept': 'application/json',
                'Content-type': 'application/json; charset=UTF-8',
            },
            method: 'PATCH',
            body: JSON.stringify(credentials)
        });
        const responseJSON = await response.json();
        return responseJSON;
    };

    put = async (url: string, credentials: Object) => {
        const response = await fetch(url, {
            headers: {
                'Accept': 'application/json',
                'Content-type': 'application/json; charset=UTF-8',
            },
            method: 'PUT',
            body: JSON.stringify(credentials)
        });
        const responseJSON = await response.json();
        return responseJSON;
    };

    delete = async (url: string, token: string) => {
        const response = await fetch(url, {
            headers: {
                'Accept': 'application/json',
                'Content-type': 'application/json; charset=UTF-8',
                'Authorization': 'Bearer ' + token,
            },
            method: 'DELETE',
        });
        const responseJSON = await response.json();
        return responseJSON;
    };
};