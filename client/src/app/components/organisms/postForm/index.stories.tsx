import { ComponentStory, ComponentMeta } from '@storybook/react';
import { PostForm } from './index';

export default {
	title: 'organismes/PostForm',
	component: PostForm,
} as ComponentMeta<typeof PostForm>;

export const Primary: ComponentStory<typeof PostForm> = () => (
    <PostForm handleSubmit={function (credentials: Object): void {
        throw new Error('Function not implemented.');
    } }/>
);
