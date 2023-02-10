export class useFetch {
    get = async (url: string) => {
        const response = await fetch(url);
        const responseJSON = response.json();
        return responseJSON;
    };

    post = async (url: string, credentials: Object) => {
        const response = await fetch(url, {
            headers: {
                'Accept': 'application/json',
            },
            method: 'POST',
            body: JSON.stringify(credentials)
        });
        const responseJSON = await response.json();
        return responseJSON;
    };

    put = async (url: string, credentials: Object) => {
        const response = await fetch(url, {
            headers: {
                'Accept': 'application/json',
            },
            method: 'PUT',
            body: JSON.stringify(credentials)
        });
        const responseJSON = await response.json();
        return responseJSON;
    };

    delete = async (url: string) => {
        const response = await fetch(url, {
            headers: {
                'Accept': 'application/json',
            },
            method: 'DELETE',
        });
        const responseJSON = await response.json();
        return responseJSON;
    };
};