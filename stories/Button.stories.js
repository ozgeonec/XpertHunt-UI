import React from 'react';

import Button from '../components/button/button'

export default {
  title: 'Button',
  component: Button
};

const Template = (args) => <Button {...args} />;

export const Primary = () =>
  (<div>
    <Button>Huu</Button>
  </div>);


