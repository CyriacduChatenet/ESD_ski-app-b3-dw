import { ComponentStory, ComponentMeta } from '@storybook/react';

import { DropdownSelect } from './index';

export default {
  title: 'molecules/DropdownSelect',
  component: DropdownSelect,
} as ComponentMeta<typeof DropdownSelect>;

export const Primary: ComponentStory<typeof DropdownSelect> = () => (
  <DropdownSelect name='size' optionsArray={[{ value:180, label: '180'}]} />
);