import { FC, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { PostService } from '@/setup/services/post.service';
import { Button } from '@/app/components/button';
import { Link } from 'react-router-dom';
import { Post } from '@/setup/types/post.type';
import { BookingForm } from '@/app/components/bookingForm';

export const PostPage: FC = () => {
	const [data, setData] = useState([]);
	const params = useParams();

	const postService = new PostService();

	useEffect(() => {
		const fetch = async () => {
			const response = await postService.findOne(`${import.meta.env.VITE_APP_API_URL}/posts`, String(params.id));
			setData(response);
		};
		fetch();
	}, []);
	return (
		<>
			{data.map((post: Post, index: number) => (
				<section key={index} className="grid grid-cols-12 gap-4 w-full px-40 pt-4">
					<div className="col-span-4">
						<Link to={'/'}>
							<Button label="Return" />
						</Link>
					</div>
					<div className="flex flex-col col-span-8">
						<img src={post.imageUrl} alt="" className="w-full h-96" />
						<h1 className="font-bold uppercase pt-8 pb-4 text-2xl">
							ski {post.title} - {post.style} - {post.size} cm - {post.weight} kg -{' '}
							<span className="text-indigo-600">{post.price}€/jour</span>
						</h1>
                        <p>route du soulan</p>
                        <p className='py-4'>{post.description}</p>
						<BookingForm/>
					</div>
				</section>
			))}
		</>
	);
};
