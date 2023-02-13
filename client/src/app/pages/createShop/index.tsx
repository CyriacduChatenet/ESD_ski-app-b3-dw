import { FC } from 'react';

import { CreateShopForm } from '@/app/components/organisms/createShopForm';

export const CreateShopPage: FC = () => {
	return (
			<div className='flex flex-col items-center justify-center px-40 w-full h-full my-40'>
				<h1 className='text-center font-semibold text-4xl mb-8'>Create shop</h1>
				<CreateShopForm/>
			</div>
	);
};
