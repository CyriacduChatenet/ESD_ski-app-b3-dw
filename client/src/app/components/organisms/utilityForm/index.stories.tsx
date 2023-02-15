import { ComponentStory, ComponentMeta } from '@storybook/react';
import { UtilityForm } from './index';

export default {
	title: 'organismes/UtilityForm',
	component: UtilityForm,
} as ComponentMeta<typeof UtilityForm>;

export const Primary: ComponentStory<typeof UtilityForm> = () => (
    <UtilityForm/>
);
