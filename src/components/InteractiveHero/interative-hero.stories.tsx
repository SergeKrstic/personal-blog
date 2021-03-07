import React from 'react';
import { Story, Meta } from '@storybook/react';

import InteractiveHero from './interactive-hero.component';

export default {
  title: 'Components/InteractiveHero',
  component: InteractiveHero,
} as Meta;

const Template: Story = (args) => <InteractiveHero {...args} />;

export const Default = Template.bind({});
