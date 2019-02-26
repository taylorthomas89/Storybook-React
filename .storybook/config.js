import { configure } from '@storybook/react';
import requireContext from 'require-context.macro';

import '../src/index.css';

const req = requireContext('../src/components', true, /\.stories\.js$/);
console.log(req);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);