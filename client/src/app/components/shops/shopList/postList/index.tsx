import { FC, useEffect, useState } from 'react';

import { Post } from '@/setup/types/post.type';

interface IProps {
	posts: Post[];
}

export const DashboardPostList: FC<IProps> = ({ posts }) => {
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
							<button className="bg-blue-500 text-white px-4 py-0.5 my-2 text-sm rounded-lg font-bold">Edit</button>
						</td>
						<td className="border border-solid border-gray-400 px-4 bg-white">
							<button className="bg-red-500 text-white px-4 py-0.5 my-2 text-sm rounded-lg font-bold">Delete</button>
						</td>
					</tr>
				))}
			</tbody>
		</table>
	);
};
