import { ComponentStory, ComponentMeta } from '@storybook/react';

import { CommentCard } from './index';

export default {
  title: 'molecules/CommentCard',
  component: CommentCard,
} as ComponentMeta<typeof CommentCard>;

export const Primary: ComponentStory<typeof CommentCard> = () => (
  <CommentCard username='Cyriac' description='super skis' stars={4} />
);