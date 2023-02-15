import { ComponentStory, ComponentMeta } from '@storybook/react';

import { DropdownOption } from './index';

export default {
  title: 'atoms/DropdownOption',
  component: DropdownOption,
} as ComponentMeta<typeof DropdownOption>;

export const Primary: ComponentStory<typeof DropdownOption> = () => (
  <DropdownOption label="size" value={180} />
);