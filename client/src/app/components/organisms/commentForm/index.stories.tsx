import { ComponentStory, ComponentMeta } from '@storybook/react';
import { CommentForm } from './index';

export default {
	title: 'organismes/CommentForm',
	component: CommentForm,
} as ComponentMeta<typeof CommentForm>;

export const Primary: ComponentStory<typeof CommentForm> = () => (
    <CommentForm post_id={'63e89748292d2086e8a3fc15'}/>
);
