import { FC, useEffect, useState } from 'react';

import { PostCard } from '@/app/components/posts/card';
import { PostService } from '@/setup/services/post.service';
import { Post } from '@/setup/types/post.type';
import { Link } from 'react-router-dom';

export const PostList: FC = () => {
	const [data, setData] = useState([]);
	const postService = new PostService();

	useEffect(() => {
		const fetch = async () => {
			const response = await postService.findAll(`${import.meta.env.VITE_APP_API_URL}/posts`);
			setData(response);
		};

		fetch();
	}, []);
	return (
		<>
			{data.map((post: Post, index: number) => (
				<Link to={`/post/${post._id}`} key={index}>
					<PostCard
						address="route du soulan"
						thumbnail_url={post.imageUrl}
						size={post.size}
						weight={post.weight}
						price={post.price}
						title={post.title}
						style={post.style}
					/>
				</Link>
			))}
		</>
	);
};
