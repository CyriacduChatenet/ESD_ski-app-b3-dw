import { ComponentStory, ComponentMeta } from '@storybook/react';

import { FormInputLabel } from './index';

export default {
  title: 'molecules/FormInputLabel',
  component: FormInputLabel,
} as ComponentMeta<typeof FormInputLabel>;

export const Primary: ComponentStory<typeof FormInputLabel> = () => (
  <FormInputLabel label={'Name'} />
);