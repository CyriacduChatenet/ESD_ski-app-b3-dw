import { Button } from '@/app/components/atoms/button';
import { PostForm } from '@/app/components/organisms/postForm';
import { ShopList } from '@/app/components/organisms/shopList';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { UpdatePostPage } from '.';

export default {
	title: 'pages/UpdatePost',
	component: UpdatePostPage,
} as ComponentMeta<typeof UpdatePostPage>;

const handleSubmit = () => {};

export const Primary: ComponentStory<typeof UpdatePostPage> = () => (
	<div className="flex flex-col items-center justify-center px-40 w-full h-full my-40">
		<h1 className="text-center font-semibold text-4xl mb-8">Update post</h1>
		<PostForm handleSubmit={handleSubmit} />
	</div>
);
