import { FC, useEffect, useState } from 'react';

import { PostService } from '@/setup/services/post.service';
import { Post } from '@/setup/types/post.type';

export const DashboardPostList: FC = () => {
	const [data, setData] = useState<Post[]>([]);
	const postService = new PostService();

	useEffect(() => {
		const fetch = async () => {
			const response = await postService.findAll(`${import.meta.env.VITE_APP_API_URL}/posts`);
			setData(response);
		};
		fetch();
	}, []);
	return (
		<table className="table-auto mt-4">
			<thead className="bg-indigo-700 text-white">
				<tr>
					<th className="px-4">Index</th>
					<th className="px-4">Title</th>
					<th className="px-4">Image url</th>
					<th className="px-4">Weight</th>
					<th className="px-4">Size</th>
					<th className="px-4">Style</th>
					<th className="px-4">Price</th>
					<th className="px-4">Description</th>
					<th className="px-4">Created at</th>
					<th className="px-4">IsAvailable</th>
					<th className="px-4">Bookings</th>
					<th className="px-4">Comments</th>
					<th className="px-4">Edit</th>
					<th className="px-4">Delete</th>
				</tr>
			</thead>
			<tbody>
				{data.map((post: Post, index: number) => (
					<tr key={index}>
						<td className="border border-solid border-gray-400 px-4">{index+1}</td>
						<td className="border border-solid border-gray-400 px-4">{post.title}</td>
						<td className="border border-solid border-gray-400 px-4"><a href={post.imageUrl} target={'_blank'}>{post.imageUrl.substring(0,30)}</a></td>
						<td className="border border-solid border-gray-400 px-4">{post.weight} kg</td>
						<td className="border border-solid border-gray-400 px-4">{post.size} cm</td>
						<td className="border border-solid border-gray-400 px-4">{post.style}</td>
						<td className="border border-solid border-gray-400 px-4">{post.price} €/j</td>
						<td className="border border-solid border-gray-400 px-4">{post.description.substring(0,30)}</td>
						<td className="border border-solid border-gray-400 px-4">{String(post.createdAt)}</td>
						<td className="border border-solid border-gray-400 px-4">{post.isAvailable ? 'Yes' : 'No'}</td>
						<td className="border border-solid border-gray-400 px-4">{post.bookings.length}</td>
						<td className="border border-solid border-gray-400 px-4">{post.comments.length}</td>
						<td className="border border-solid border-gray-400 px-4">edit</td>
						<td className="border border-solid border-gray-400 px-4">delete</td>
					</tr>
				))}
			</tbody>
		</table>
	);
};
