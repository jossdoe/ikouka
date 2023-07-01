import { Button } from './index';

export default {
  title: 'Button',
  component: Button,
};

export const Primary = {
  args: {
    children: 'Click Me',
    variant: 'primary',
  },
};

export const Secondary = {
  args: {
    children: 'Click Me',
    variant: 'secondary',
  },
};

export const Text = {
  args: {
    children: 'Click Me',
    variant: 'text',
  },
};
