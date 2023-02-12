import { FC, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

import { PostService } from '@/setup/services/post.service';
import { Button } from '@/app/components/button';
import { Post } from '@/setup/types/post.type';
import { BookingForm } from '@/app/components/posts/bookingForm';
import { CommentForm } from '@/app/components/posts/commentForm';
import { CommentList } from '@/app/components/posts/commentList';
import usePost from '@/setup/contexts/post.context';

export const PostPage: FC = () => {
	const { data, setData } = usePost();
	const params = useParams();

	const postService = new PostService();

	useEffect(() => {
		const fetch = async () => {
			const response = await postService.findOne(`${import.meta.env.VITE_APP_API_URL}/posts/${params.id}`);
			setData(response);
		};
		fetch();
	}, []);
	return (
		<>
			{data.map((post: Post, index: number) => (
				<section key={index} className="grid grid-cols-12 gap-4 w-full px-40 pt-4">
					<div className="col-span-4 flex flex-col">
						<Link to={'/'}>
							<Button label="Return" />
						</Link>
						<CommentForm post_id={String(params.id)} />
						<CommentList comments={post.comments}/>
					</div>
					<div className="flex flex-col col-span-8">
						<img src={post.imageUrl} alt="" className="w-full h-96" />
						<h1 className="font-bold uppercase pt-8 pb-4 text-2xl">
							ski {post.title} - {post.style} - {post.size} cm - {post.weight} kg -{' '}
							<span className="text-indigo-600">{post.price}€/jour</span>
						</h1>
                        <p>route du soulan</p>
                        <p className='py-4'>{post.description}</p>
						<BookingForm post_id={String(params.id)} />
					</div>
				</section>
			))}
		</>
	);
};
