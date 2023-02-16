import { FC, useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';

import { PostCard } from '@/app/components/molecules/card';
import { PostService } from '@/setup/services/post.service';
import { Post } from '@/setup/types/post.type';
import useFilter from '@/setup/contexts/filter.context';

export const PostList: FC = () => {
	const [data, setData] = useState([]);
	const { credentials } = useFilter();

	const postService = new PostService();

	useEffect(() => {
		const fetch = async () => {
			const response = await postService.findAll(`${import.meta.env.VITE_APP_API_URL}/posts`);
			setData(response);
		};

		fetch();
	}, []);

	const displayData = useMemo(() => {
		if (credentials.size != 0 && credentials.style != '' || credentials.addresse != '' || credentials.weight != 0) {
			return data
			.filter(
				(post: Post) => post.size == credentials.size || post.weight == credentials.weight || post.style == credentials.style
			)
			.map((post: Post, index: number) => (
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
			));
		}
		return data.map((post: Post, index: number) => (
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
		));
	}, [credentials]);
	return <>{displayData}</>;
};
