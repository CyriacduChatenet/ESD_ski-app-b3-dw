import { useFetch as useFetchHook } from '@/setup/hooks/useFetch.hook';
import { Booking } from '@/setup/types/booking.type';
import { PostService } from '@/setup/services/post.service';

export class BookingService implements Booking {
	useFetch = new useFetchHook();
	postService = new PostService();

	async findAll(url: string) {
		return await this.useFetch.get(url);
	}

	async findOne(url: string, id: string) {
		return await this.useFetch.get(`${url}/${id}`);
	}

	async create(url: string, credentials: Object) {
		return await this.useFetch.post(url, credentials);
	}

	async updateOne(url: string, credentials: Object) {
		return await this.useFetch.patch(url, credentials);
	}

	async createAndUpdate(booking_url: string, post_url: string, credentials: Object) {
		const booking = await this.create(booking_url, credentials);
		const post = await this.postService.updateOne(post_url, { bookings: [`${booking._id}`]});
	};

	async deleteOne(url: string, id: string) {
		return await this.useFetch.delete(`${url}/${id}`);
	}
}
