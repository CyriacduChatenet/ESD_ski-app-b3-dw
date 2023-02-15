import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Button } from '../../atoms/button';
import { FormInput } from '../../atoms/input';

import { BookingForm } from './index';

export default {
	title: 'organismes/BookingForm',
	component: BookingForm,
} as ComponentMeta<typeof BookingForm>;

const handleChange = () => {}
const handleSubmit = () => {}

export const Primary: ComponentStory<typeof BookingForm> = () => (
	<form action="" onSubmit={handleSubmit}>
		<FormInput type={'tel'} name={'phoneNumber'} placeholder={'phone number'} onChange={() => handleChange} />
		<Button label="Reserved" px="px-8" py="py-2" background_color="bg-indigo-700" />
	</form>
);
