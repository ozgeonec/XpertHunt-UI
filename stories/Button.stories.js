import React from 'react';

import Button from '../components/button/button'

export default {
    title: 'Example/Button',
    component: Button,
    decorators: [withKnobs]
}

const Template = (args) => <Button {...args} />;

export const ButtonExample = () => (
    <Button>
        hi

    </Button>
)

