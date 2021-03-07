import React from 'react';
import { Story, Meta } from '@storybook/react';

import Header, { HeaderProps } from './header.component';

export default {
  title: 'Components/Header',
  component: Header,
} as Meta;

const Template: Story<HeaderProps> = (args) => <Header {...args} />;

export const HomeHeader = Template.bind({});
HomeHeader.args = {
  title: 'Home Header Title',
  isRootPath: true
}

export const PostHeader = Template.bind({});
PostHeader.args = {
  title: 'Post Header Title',
  isRootPath: false
}