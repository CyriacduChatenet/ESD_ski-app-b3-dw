import { Post } from '@/setup/types/post.type';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Button } from '../../atoms/button';
import { DashboardPostList } from '../../organisms/dashboardPostList';

import { ShopAccordion } from './index';

export default {
	title: 'molecules/ShopAccordion',
	component: ShopAccordion,
} as ComponentMeta<typeof ShopAccordion>;

const handleDelete= () => {};
const handleUpdate= (value: string) => {};
const id = ''
const name = ''
const addresse = ''
const posts: Post[] = [];

export const Primary: ComponentStory<typeof ShopAccordion> = () => (
	<details className="bg-indigo-100 my-4 px-5 py-4 rounded-lg">
		<summary className="bg-indigo-100">
			<b>{name}</b> - {addresse}
			<div style={{ marginLeft: '60rem' }}>
				<Button
					label="Create"
					background_color="bg-green-500"
					px="px-4"
					py="py-1"
				/>
				<Button label="Edit" background_color="bg-blue-500" px="px-4" py="py-1" ml="ml-8" onClick={() => handleUpdate(id)} />
				<Button label="Delete" background_color="bg-red-500" px="px-4" py="py-1" ml="ml-8" onClick={() => handleDelete()} />
			</div>
		</summary>
		<DashboardPostList posts={posts} />
	</details>
);
