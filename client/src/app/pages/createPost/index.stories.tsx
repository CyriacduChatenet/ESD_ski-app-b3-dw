import { PostForm } from '@/app/components/organisms/postForm';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { CreatePostPage } from '.';

export default {
	title: 'pages/CreatePost',
	component: CreatePostPage,
} as ComponentMeta<typeof CreatePostPage>;

const handleSubmit = () => {};

export const Primary: ComponentStory<typeof CreatePostPage> = () => (
    <div className='flex flex-col items-center justify-center px-40 w-full h-full my-40'>
    <h1 className='text-center font-semibold text-4xl mb-8'>Create post</h1>
    <PostForm handleSubmit={handleSubmit}/>
</div>
);
