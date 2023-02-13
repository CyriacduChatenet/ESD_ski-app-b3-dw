import { FC } from 'react';

import { Post } from '@/setup/types/post.type';
import useShop from '@/setup/contexts/shop.context';
import { PostService } from '@/setup/services/post.service';
import { Button } from '@/app/components/atoms/button';
import { TableEntry } from '@/app/components/atoms/tableEntry';
import { TableCelular } from '@/app/components/atoms/tableCelular';
import { Table } from '@/app/components/molecules/table';
import { Shop } from '@/setup/types/shop.type';

interface IProps {
	posts: Post[];
}

export const DashboardPostList: FC<IProps> = ({ posts }) => {
	const TABLE_ENTRIES = [
		'Index',
		'Title',
		'Image url',
		'Weight',
		'Size',
		'Style',
		'Price',
		'Description',
		'Created at',
		'is Available',
		'Bookings',
		'Comments',
		'Edit',
		'Delete',
	];

	const { data, setData } = useShop();

	const postService = new PostService();

	const handleDelete = (post_id: string) => {
		postService.deleteOne(`${import.meta.env.VITE_APP_API_URL}/posts`, post_id);
		setData(data.filter((post) => post._id !== post_id));
	};
	return (
		<Table
			tableHead={
				<>
					{TABLE_ENTRIES.map((entry: string, index:number) => (
						<TableEntry key={index} label={entry} />
					))}
				</>
			}
			tableBody={
				<>
					{posts.map((post: Post, index: number) => (
						<tr key={index}>
							<TableCelular label={index + 1} />
							<TableCelular label={post.title} />
							<TableCelular>
								<a href={post.imageUrl} target={'_blank'}>
									{post.imageUrl.substring(0, 30)}
								</a>
							</TableCelular>
							<TableCelular label={`${post.weight} kg`} />
							<TableCelular label={`${post.size} cm`} />
							<TableCelular label={post.style} />
							<TableCelular label={`${post.price} €/j`} />
							<TableCelular label={post.description.substring(0, 30)} />
							<TableCelular label={String(post.createdAt)} />
							<TableCelular label={post.isAvailable ? 'Yes' : 'No'} />
							<TableCelular label={post.bookings.length} />
							<TableCelular label={post.comments.length} />
							<TableCelular>
								<Button label="Edit" background_color="bg-blue-500" px="px-4" py="py-0.5" />
							</TableCelular>
							<TableCelular>
								<Button
									label="Delete"
									background_color="bg-red-500"
									px="px-4"
									py="py-0.5"
									my="my-2"
									onClick={() => handleDelete(post._id)}
								/>
							</TableCelular>
						</tr>
					))}
				</>
			}
		/>
	);
};
