import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ShopForm } from './index';

export default {
	title: 'organismes/ShopForm',
	component: ShopForm,
} as ComponentMeta<typeof ShopForm>;

export const Primary: ComponentStory<typeof ShopForm> = () => (
    <ShopForm handleSubmit={function (credentials: Object): void {
        throw new Error('Function not implemented.');
    } }/>
);
