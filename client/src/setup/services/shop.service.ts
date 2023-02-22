import { useFetch as useFetchHook } from "@/setup/hooks/useFetch.hook";
import { UserService } from "./user.service";

export class ShopService {
    useFetch = new useFetchHook();
    userService = new UserService();

    findAll(url: string) {
        return this.useFetch.get(url);
    };

    findOne(url: string) {
        return this.useFetch.get(`${url}`);
    };

    create(url: string, credentials: Object) {
        return this.useFetch.postProtected(url, credentials, String(localStorage.getItem('acessToken')));
    };

    updateOne(url: string, credentials: Object) {
        return this.useFetch.patchProtected(url, credentials, String(localStorage.getItem('acessToken')));
    };

    deleteOne(url: string, id: string) {
        return this.useFetch.delete(`${url}/${id}`, String(localStorage.getItem('acessToken')));
    };
};