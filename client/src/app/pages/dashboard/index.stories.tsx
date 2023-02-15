import { Button } from '@/app/components/atoms/button';
import { ShopList } from '@/app/components/organisms/shopList';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { DashboardPage } from '.';

export default {
	title: 'pages/Dashboard',
	component: DashboardPage,
} as ComponentMeta<typeof DashboardPage>;

const handleSubmit = () => {};

export const Primary: ComponentStory<typeof DashboardPage> = () => (
    <div className="w-full px-20 py-4">
    <div className='w-full flex justify-between mb-12 mt-4'>
        <h1 className="text-3xl font-bold">Shops</h1>
        <p><Button label="Add shop" px="px-8" py="py-2 " background_color='bg-indigo-700' /></p>
    </div>
    <ShopList />
</div>
);
