import { useFetch as useFetchHook } from "@/setup/hooks/useFetch.hook";
import { Shop } from "@/setup/types/shop.type";

export class ShopService implements Shop {
    useFetch = new useFetchHook();

    findAll(url: string) {
        return this.useFetch.get(url);
    };

    findOne(url: string, id: string) {
        return this.useFetch.get(`${url}/${id}`);
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