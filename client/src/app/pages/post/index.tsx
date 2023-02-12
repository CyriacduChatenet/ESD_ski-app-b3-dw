import { FC, useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

import { PostService } from '@/setup/services/post.service';
import { Button } from '@/app/components/atoms/button';
import { Post } from '@/setup/types/post.type';
import { BookingForm } from '@/app/components/posts/bookingForm';
import { CommentForm } from '@/app/components/posts/commentForm';
import { CommentList } from '@/app/components/posts/commentList';
import usePost from '@/setup/contexts/post.context';
import { Comment } from '@/setup/types/comment.type';

export const PostPage: FC = () => {
	const [totalStars, setTotalStars] = useState(0);
	const { data, setData } = usePost();
	const params = useParams();

	const postService = new PostService();

	const handleStarsAverage = () => {
		data.map((post: Post) => {
			post.comments.map((comment: Comment) => {
				setTotalStars((prevState) => prevState += comment.stars)
			})
		})
	};

	useEffect(() => {
		const fetch = async () => {
			const response = await postService.findOne(`${import.meta.env.VITE_APP_API_URL}/posts/${params.id}`);
			setData(response);
		};
		fetch();
		handleStarsAverage();
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
						<CommentList comments={post.comments} />
					</div>
					<div className="flex flex-col col-span-8">
						<img src={post.imageUrl} alt="" className="w-full h-96" />
						<div className="flex items-center justify-around w-1/2 mx-1/10 py-1 my-1 bg-gray-700">
							{[...Array(data[0].comments.length)].map((e: any, index: number) => (
								<div key={index}>
									<svg xmlns="http://www.w3.org/2000/svg" width="1rem" height="1rem" viewBox="0 0 24 24">
										<path
											fill="white"
											d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2L9.19 8.63L2 9.24l5.46 4.73L5.82 21z"
										/>
									</svg>
								</div>
							))}
						</div>
						<h1 className="font-bold uppercase pt-8 pb-4 text-2xl">
							ski {post.title} - {post.style} - {post.size} cm - {post.weight} kg -{' '}
							<span className="text-indigo-600">{post.price}€/jour</span>
						</h1>
						<p>route du soulan</p>
						<p className="py-4">{post.description}</p>
						<BookingForm post_id={String(params.id)} />
					</div>
				</section>
			))}
		</>
	);
};
