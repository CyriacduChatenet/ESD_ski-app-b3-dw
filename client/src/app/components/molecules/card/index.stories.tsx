import { ComponentStory, ComponentMeta } from '@storybook/react';

import { PostCard } from './index';

export default {
	title: 'molecules/PostCard',
	component: PostCard,
} as ComponentMeta<typeof PostCard>;

export const Primary: ComponentStory<typeof PostCard> = () => (
	<PostCard
		address="265 route du Soulan 65270 St Lary Soulan"
		thumbnail_url="https://images.unsplash.com/photo-1551698618-1dfe5d97d256?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80"
		style="freestyle"
		size={160}
		weight={50}
		price={25}
		title="Magasin des Pyrénées"
	/>
);
