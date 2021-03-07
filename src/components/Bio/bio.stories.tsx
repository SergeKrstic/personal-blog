import React from 'react';
import { Story, Meta } from '@storybook/react';

import Bio from './bio.component';

export default {
  title: 'Components/Bio',
  component: Bio,
} as Meta;

const Template: Story = (args) => <Bio {...args} />;

export const Default = Template.bind({});
