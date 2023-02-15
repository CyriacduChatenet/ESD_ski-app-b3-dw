import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ForgotPasswordForm } from './index';

export default {
	title: 'organismes/ForgotPasswordForm',
	component: ForgotPasswordForm,
} as ComponentMeta<typeof ForgotPasswordForm>;

export const Primary: ComponentStory<typeof ForgotPasswordForm> = () => (
    <ForgotPasswordForm/>
);
