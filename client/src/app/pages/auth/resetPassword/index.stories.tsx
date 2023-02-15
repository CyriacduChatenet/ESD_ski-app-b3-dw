import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ResetPasswordPage } from './index';

export default {
	title: 'pages/ResetPassword',
	component: ResetPasswordPage,
} as ComponentMeta<typeof ResetPasswordPage>;

export const Primary: ComponentStory<typeof ResetPasswordPage> = () => (
	<div>
		<h1>Reset password</h1>
	</div>
);
