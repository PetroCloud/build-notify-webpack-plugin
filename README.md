# build-notify-webpack-plugin

A Webpack plugin to publish desktop notifications upon build completion

## Usage
```js
   const Notifier = require('build-notify-webpack-plugin');
   ...
   plugins: [
    ...
    new Notifier({
        // Notification title; defaults to package.json.name
        title: 'Good News Everyone!',
        // Path to optional notification image
        logo: path.join('assets', 'hooray.png')
      })
   ]
```