import { ComponentStory, ComponentMeta } from '@storybook/react';
import { UtilityBar } from './index';

export default {
	title: 'organismes/UtilityBar',
	component: UtilityBar,
} as ComponentMeta<typeof UtilityBar>;

export const Primary: ComponentStory<typeof UtilityBar> = () => (
    <UtilityBar/>
);
