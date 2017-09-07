# VeamsLogger plugin

The VeamsLogger plugin disables `console` logs by default. You can provide parameters (`?devmode`) in the URL to show the logs in your console.

Furthermore it gives you the possibility to add a logger (`?logger`) which will be displayed on other devices.

__How to__

```js
import Veams from 'veams';
import VeamsLogger from 'veams/lib/plugins/logger';

// Intialize core of Veams
Veams.initialize();

// Add plugins to the Veams system
Veams.use(VeamsLogger);
```
