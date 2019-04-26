[![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg)](https://github.com/prettier/prettier)
[![Greenkeeper badge](https://badges.greenkeeper.io/mapreflex/api-client.svg)](https://greenkeeper.io/)
[![Travis](https://img.shields.io/travis/mapreflex/api-client.svg)](https://travis-ci.org/mapreflex/api-client)
[![Coveralls](https://img.shields.io/coveralls/mapreflex/api-client.svg)](https://coveralls.io/github/mapreflex/api-client)
[![Dev Dependencies](https://david-dm.org/mapreflex/api-client/dev-status.svg)](https://david-dm.org/mapreflex/api-client?type=dev)

# MapReflex Client
A light client for

### Installation

MapReflexClient is available on NPM. To install it open a terminal and run…
```shell
npm install @mapreflex/api-client  --save
```

Not using NPM? While I would **strongly** recommend you to use NPM to manage your app's dependencies, you can still [download it manually](https://unpkg.com/@maprelfex/api-client/dist/mapreflex-client.umd.js).

### Usage

Once installed you can use it with your favorite module bundler.

```javascript
// Using ES6 syntax (requires a transpiler)
import MapReflexClient from '@mapreflex/api-client';
const api = new MapReflexClient(API_KEY);

// Using ES5 syntax
var MapReflexClient = require('@mapreflex/api-client');
var api = new MapReflexClient(API_KEY);
```

Not using a module bundler? No problem! If you include MapReflexClient using a `<script>` tag it will expose a global `MapReflexClient` constructor which you can use.

```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <!-- Your regular head tags -->
    </head>
    <body>
        <!-- Your regular body -->
        <script type="text/javascript" src="https://unpkg.com/@maprelfex/api-client/dist/mapreflex-client.umd.js"></script>
        <script type="text/javascript">
            var api = new MapReflexClient(API_KEY);
        </script>
    </body>
</html>
```

### Methods

##### `getZipsGeoJsonByZipCodes(zipCodes: Array<string>)`
Get geometry of Zcta by zipCodes array

##### `getStateGeoJsonByAbs(abbreviations: Array<string>)`
Get geometry of states by name abbreviations

## jQuery

If you're upset that I decided to ditch jQuery don't be. I plan to write a wrapper and enable MapReflexClient to work as a jQuery plugin, though the API will break, that's for sure. You'll need to update your code if you plan to upgrade.
