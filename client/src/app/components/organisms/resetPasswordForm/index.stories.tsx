import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ResetPasswordForm } from './index';

export default {
	title: 'organismes/ResetPasswordForm',
	component: ResetPasswordForm,
} as ComponentMeta<typeof ResetPasswordForm>;

export const Primary: ComponentStory<typeof ResetPasswordForm> = () => (
    <ResetPasswordForm/>
);
