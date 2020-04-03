import { ApplyPluginsType } from 'D:/work/horse/node_modules/@umijs/runtime/dist/index.js';
import { plugin } from './plugin';

const routes = [
  {
    "path": "/",
    "component": (props) => require('react').createElement(require('D:/work/horse/node_modules/@umijs/preset-dumi/lib/themes/default/layout.js').default, {
      ...{"menus":{"*":{"*":[{"path":"/","title":"Hello dumi!","meta":{}},{"title":"Foo","path":"/foo","meta":{},"children":[]}]}},"locales":[],"navs":{},"title":"Library Name","mode":"doc"},
      ...props,
    }),
    "routes": [
      {
        "path": "/foo",
        "component": require('../../Foo/index.md').default,
        "exact": true,
        "meta": {
          "filePath": "src/Foo/index.md",
          "updatedTime": 1585882777198,
          "slugs": [
            {
              "depth": 2,
              "value": "Foo",
              "heading": "foo"
            }
          ],
          "title": "Foo",
          "group": {
            "path": "/foo",
            "title": "Foo"
          }
        },
        "title": "Foo"
      },
      {
        "path": "/",
        "component": require('../../../docs/index.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/index.md",
          "updatedTime": 1585882777194,
          "slugs": [
            {
              "depth": 2,
              "value": "Hello dumi!",
              "heading": "hello-dumi"
            }
          ],
          "title": "Hello dumi!"
        },
        "title": "Hello dumi!"
      }
    ],
    "title": "Library Name"
  }
];

// allow user to extend routes
plugin.applyPlugins({
  key: 'patchRoutes',
  type: ApplyPluginsType.event,
  args: { routes },
});

export { routes };
