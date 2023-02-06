import { Booking } from "../types/booking.type";
import { Post } from "../types/post.type";
import { Shop } from "../types/shop.type";

export class useFetchHook {
  get = async (url: string): Promise<Post | Booking | Comment | Shop> => {
    const response = await fetch(url);
    const responseJSON = response.json();
    return responseJSON;
  };

  post = async (url: string, body: Object): Promise<Post | Booking | Comment | Shop> => {
    const response = await fetch(url, {
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        },
        method: 'POST',
        body: JSON.stringify(body),
    });
    const responseJSON = response.json();
    return responseJSON;
  };

  put = async (url: string, body: Object): Promise<Post | Booking | Comment | Shop> => {
    const response = await fetch(url, {
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        },
        method: 'PUT',
        body: JSON.stringify(body),
    });
    const responseJSON = response.json();
    return responseJSON;
  };

  delete = async (url: string): Promise<string> => {
    const response = await fetch(url, {
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        },
        method: 'DELETE'
    });
    const responseJSON = response.json();
    return responseJSON;
  };
};