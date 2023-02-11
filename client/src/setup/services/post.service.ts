import { useFetch as useFetchHook } from "@/setup/hooks/useFetch.hook";

export class PostService {
    useFetch = new useFetchHook();

    findAll(url: string) {
        return this.useFetch.get(url);
    };

    findOne(url: string) {
        return this.useFetch.get(`${url}`);
    };

    create(url: string, credentials: Object) {
        return this.useFetch.post(url, credentials);
    };

    updateOne(url: string, credentials: Object) {
        return this.useFetch.patch(url, credentials);
    };

    deleteOne(url: string, id: string) {
        return this.useFetch.delete(`${url}/${id}`);
    };
};