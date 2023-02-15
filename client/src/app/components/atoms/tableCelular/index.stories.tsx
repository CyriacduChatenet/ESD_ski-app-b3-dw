import { ComponentStory, ComponentMeta } from '@storybook/react';

import { TableCelular } from './index';

export default {
  title: 'atoms/TableCelular',
  component: TableCelular,
} as ComponentMeta<typeof TableCelular>;

export const Primary: ComponentStory<typeof TableCelular> = () => (
  <TableCelular label={'hello world'} />
);