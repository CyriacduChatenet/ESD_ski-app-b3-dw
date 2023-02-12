import { FC } from 'react';

import { Post } from '@/setup/types/post.type';
import useShop from '@/setup/contexts/shop.context';
import { PostService } from '@/setup/services/post.service';
import { Button } from '@/app/components/button';

interface IProps {
	posts: Post[];
}

export const DashboardPostList: FC<IProps> = ({ posts }) => {
	const { data, setData } = useShop();

	const postService = new PostService();

	const handleDelete = (post_id: string) => {
		postService.deleteOne(`${import.meta.env.VITE_APP_API_URL}/posts`, post_id);
		setData(data.filter(post => post._id !== post_id));
	};
	return (
		<table className="table-auto mt-4">
			<thead className="bg-indigo-400 text-white">
				<tr>
					<th className="px-4 py-2">Index</th>
					<th className="px-4 py-2">Title</th>
					<th className="px-4 py-2">Image url</th>
					<th className="px-4 py-2">Weight</th>
					<th className="px-4 py-2">Size</th>
					<th className="px-4 py-2">Style</th>
					<th className="px-4 py-2">Price</th>
					<th className="px-4 py-2">Description</th>
					<th className="px-4 py-2">Created at</th>
					<th className="px-4 py-2">IsAvailable</th>
					<th className="px-4 py-2">Bookings</th>
					<th className="px-4 py-2">Comments</th>
					<th className="px-4 py-2">Edit</th>
					<th className="px-4 py-2">Delete</th>
				</tr>
			</thead>
			<tbody>
				{posts.map((post: Post, index: number) => (
					<tr key={index}>
						<td className="border border-solid border-gray-400 px-4 bg-white">{index + 1}</td>
						<td className="border border-solid border-gray-400 px-4 bg-white">{post.title}</td>
						<td className="border border-solid border-gray-400 px-4 bg-white">
							<a href={post.imageUrl} target={'_blank'}>
								{post.imageUrl.substring(0, 30)}
							</a>
						</td>
						<td className="border border-solid border-gray-400 px-4 bg-white">{post.weight} kg</td>
						<td className="border border-solid border-gray-400 px-4 bg-white">{post.size} cm</td>
						<td className="border border-solid border-gray-400 px-4 bg-white">{post.style}</td>
						<td className="border border-solid border-gray-400 px-4 bg-white">{post.price} €/j</td>
						<td className="border border-solid border-gray-400 px-4 bg-white">{post.description.substring(0, 30)}</td>
						<td className="border border-solid border-gray-400 px-4 bg-white">{String(post.createdAt)}</td>
						<td className="border border-solid border-gray-400 px-4 bg-white">{post.isAvailable ? 'Yes' : 'No'}</td>
						<td className="border border-solid border-gray-400 px-4 bg-white">{post.bookings.length}</td>
						<td className="border border-solid border-gray-400 px-4 bg-white">{post.comments.length}</td>
						<td className="border border-solid border-gray-400 px-4 bg-white">
							<Button label='Edit' background_color='bg-blue-500' px='px-4' py='py-0.5'/>
						</td>
						<td className="border border-solid border-gray-400 px-4 bg-white">
							<Button label='Delete' background_color='bg-red-500' px='px-4' py='py-0.5' my='my-2' onClick={() => handleDelete(post._id)}/>
						</td>
					</tr>
				))}
			</tbody>
		</table>
	);
};
