import { useFetch as useFetchHook } from "@/setup/hooks/useFetch.hook";

export class UserService {
    useFetch = new useFetchHook();

    findAll(url: string) {
        return this.useFetch.get(url);
    };

    findOne = (url: string) => {
        return this.useFetch.get(`${url}`);
    };

    updateOne(url: string, credentials: Object) {
        return this.useFetch.patchProtected(url, credentials, String(localStorage.getItem('acessToken')));
    };

    deleteOne(url: string, id: string) {
        return this.useFetch.delete(`${url}/${id}`, String(localStorage.getItem('acessToken')));
    };
};