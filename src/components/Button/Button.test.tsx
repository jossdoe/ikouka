import React from 'react';
import * as ReactDOM from 'react-dom';
import { Default as Button } from './Button.stories';

describe('Button', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Button variant="primary">Click Me</Button>, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
