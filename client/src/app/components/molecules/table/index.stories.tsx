import { ComponentStory, ComponentMeta } from '@storybook/react';
import { TableCelular } from '../../atoms/tableCelular';
import { TableEntry } from '../../atoms/tableEntry';

import { Table } from './index';

export default {
  title: 'molecules/Table',
  component: Table,
} as ComponentMeta<typeof Table>;

export const Primary: ComponentStory<typeof Table> = () => (
  <Table tableHead={<><TableEntry label={'name'}/><TableEntry label={'name'}/></>} tableBody={<><TableCelular label={'hello world'}/><TableCelular label={'hello world'}/></>} />
);