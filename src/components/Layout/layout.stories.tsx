import React from 'react';
import { Story, Meta } from '@storybook/react';

import Layout, { LayoutProps } from './layout.component';

export default {
  title: 'Components/Layout',
  component: Layout,
} as Meta;

const Template: Story<LayoutProps> = (args) => <Layout {...args} />;

export const Default = Template.bind({});
Default.args = {
  location: {
    ancestorOrigins: {
      length: 0,
      contains: () => false,
      item: () => '',
    },
    pathname: 'some/random/path',
    hash: '',
    host: '',
    hostname: '',
    href: '',
    toString: () => '',
    origin: '',
    port: '',
    protocol: '',
    search: '',
    assign: () => { },
    reload: () => { },
    replace: () => { }
  },
  title: 'Blog Post Title',
  children: <div>jello</div>
}
