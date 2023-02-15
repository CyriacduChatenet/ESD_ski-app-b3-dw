import { ShopForm } from '@/app/components/organisms/shopForm';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { CreateShopPage } from '.';

export default {
	title: 'pages/CreateShop',
	component: CreateShopPage,
} as ComponentMeta<typeof CreateShopPage>;

const handleSubmit = () => {};

export const Primary: ComponentStory<typeof CreateShopPage> = () => (
    <div className='flex flex-col items-center justify-center px-40 w-full h-full my-40'>
    <h1 className='text-center font-semibold text-4xl mb-8'>Create shop</h1>
    <ShopForm handleSubmit={handleSubmit}/>
</div>
);
