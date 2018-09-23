[//]: # ({{#wrapWith "content-section"}})

[//]: #     ({{#wrapWith "grid-row"}})
[//]: #         ({{#wrapWith "grid-col" colClasses="is-col-mobile-l-8"}})

# VeamsLogger plugin

The VeamsLogger plugin disables `console` logs by default. You can provide parameters (`?devmode`) in the URL to show the logs in your console.

Furthermore it gives you the possibility to add a logger (`?logger`) which will be displayed on other devices.

The plugin is session based, means you only need to add the parameter once you started your project.

TypeScript is also supported. 

--------------

## Installation

### NPM

``` bash 
npm install @veams/plugin-logger --save
```

### Yarn 

``` bash 
yarn add @veams/plugin-logger
```

--------------

## Usage

```js
import Veams from '@veams/core';
import VeamsLogger from '@veams/plugin-logger';

// Intialize core of Veams
Veams.initialize(() => {
    // Add plugins to the Veams system
    Veams.use(VeamsLogger, {
        devmodeParam: 'debug', // default: 'devmode'
        loggerParam: 'logs' // default: 'logger'
    });
});
```

### Options

| Option | Type | Default | Description |
|:--- |:---:|:---:|:--- |
| _devmodeParam_ | {`String`} | [`'devmode'`] | You can override the url param key for the devmode which shows the logs in console. |
| _loggerParam_ | {`String`} | [`'logger'`] | You can override the url param key for the logger which gets appended to the body. |

[//]: #         ({{/wrapWith}})
[//]: #     ({{/wrapWith}})

[//]: # ({{/wrapWith}})