import { Navbar } from '@/app/components/organisms/navbar';
import { ShopForm } from '@/app/components/organisms/shopForm';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { UpdateShopPage } from '.';

export default {
	title: 'pages/UpdateShop',
	component: UpdateShopPage,
} as ComponentMeta<typeof UpdateShopPage>;

const handleSubmit = () => {};

export const Primary: ComponentStory<typeof UpdateShopPage> = () => (
	<div className="flex flex-col items-center justify-center px-40 w-full h-full my-40">
		<h1 className="text-center font-semibold text-4xl mb-8">Update shop</h1>
		<ShopForm handleSubmit={handleSubmit} />
	</div>
);
