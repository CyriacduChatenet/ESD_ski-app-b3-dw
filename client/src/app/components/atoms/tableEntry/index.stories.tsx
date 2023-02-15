import { ComponentStory, ComponentMeta } from '@storybook/react';

import { TableEntry } from './index';

export default {
  title: 'atoms/TableEntry',
  component: TableEntry,
} as ComponentMeta<typeof TableEntry>;

export const Primary: ComponentStory<typeof TableEntry> = () => (
  <TableEntry label={'Name'} />
);