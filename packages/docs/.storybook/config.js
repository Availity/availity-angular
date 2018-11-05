import { setOptions } from '@storybook/addon-options';
import './config.scss';
import './bootstrap.js';

setOptions({
  name: 'availity-angular',
  url: 'https://github.com/availity/availity-angular',
  goFullScreen: false,
  showStoriesPanel: true,
  showAddonPanel: true,
  showSearchBox: false,
  addonPanelInRight: true,
  hierarchySeparator: /\//,
  hierarchyRootSeparator: /\|/,
});

addDecorator(checkA11y);

// automatically import all story js files that end with *.stories.js
const req = require.context('../stories/', true, /\.stories\.js$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}
configure(loadStories, module);
