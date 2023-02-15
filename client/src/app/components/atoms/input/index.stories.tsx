import { ComponentStory, ComponentMeta } from '@storybook/react';

import { FormInput } from './index';

export default {
  title: 'atoms/FormInput',
  component: FormInput,
} as ComponentMeta<typeof FormInput>;

export const Primary: ComponentStory<typeof FormInput> = () => (
  <FormInput type='text' name='email' placeholder='Email' />
);