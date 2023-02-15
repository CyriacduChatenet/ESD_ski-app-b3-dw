import { Post } from '@/setup/types/post.type';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { DashboardPostList } from '.';
import { Button } from '../../atoms/button';
import { TableCelular } from '../../atoms/tableCelular';
import { TableEntry } from '../../atoms/tableEntry';
import { Table } from '../../molecules/table';

export default {
	title: 'organismes/DashboardPostList',
	component: DashboardPostList
} as ComponentMeta<typeof DashboardPostList>;

const handleUpdate = (post_id: string) => {};
const handleDelete = (post_id: string) => {};

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

const posts: Post[] = [];

export const Primary: ComponentStory<typeof DashboardPostList> = () => 
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
                    <Button label="Edit" background_color="bg-blue-500" px="px-4" py="py-0.5" onClick={() => handleUpdate(post.id)} />
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
