[![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg)](https://github.com/prettier/prettier)
[![Travis](https://img.shields.io/travis/mapreflex/api-client.svg)](https://travis-ci.org/mapreflex/api-client)
[![Coveralls](https://img.shields.io/coveralls/mapreflex/api-client.svg)](https://coveralls.io/github/mapreflex/api-client)
[![Dev Dependencies](https://david-dm.org/mapreflex/api-client/dev-status.svg)](https://david-dm.org/mapreflex/api-client?type=dev)

# Mapreflex Client
A light js client for mapreflex service

### Documentation 
> [Api documentation](https://www.mapreflex.com/swagger-ui.html). 

### API key

You should generate the api key on [Mapreflex cabinet](https://www.mapreflex.com)

### Installation

MapReflexClient is available on NPM. To install it open a terminal and run…
```shell
npm install @mapreflex/api-client --save
```

Not using NPM? While I would **strongly** recommend you to use NPM to manage your app's dependencies, you can still [download it manually](https://unpkg.com/@maprelfex/api-client/dist/mapreflex-client.umd.js).

### Usage

Once installed you can use it with your favorite module bundler.

```javascript
// Using ES6 syntax (requires a transpiler)
import MapReflexClient from '@mapreflex/api-client';
const api = new MapReflexClient({apiKey:API_KEY});

// Using ES5 syntax
var MapReflexClient = require('@mapreflex/api-client');
var api = new MapReflexClient({apiKey:API_KEY});
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
            var api = new MapReflexClient({apiKey:API_KEY});
        </script>
    </body>
</html>
```

### Methods

#### Zctas

##### `getByZipCode(zipCode: string): Promise<FeatureCollection<MultiPolygon, ZctaProperties>>`
##### `getByCountyGeoId(countyGeoId: string): Promise<FeatureCollection<MultiPolygon, ZctaProperties>>`
##### `getByCountyNameAndStateAb(countyName: string, stateAb: string): Promise<FeatureCollection<MultiPolygon, ZctaProperties>>`
##### `getByZipCodes(zipCodes: string[]): Promise<FeatureCollection<MultiPolygon, ZctaProperties>>`   
##### `getInBoundingBox(northEast: number[], southWest: number[], intersect?: boolean): Promise<FeatureCollection<MultiPolygon, ZctaProperties>>`
##### `getInRadius(latitude: number, longitude: number, radius: number): Promise<FeatureCollection<MultiPolygon, ZctaProperties>>`

#### Counties

##### `getByGeoId(geoId: string): Promise<FeatureCollection<MultiPolygon, CountyProperties>>`
##### `getByGeoIds(geoIds: string[]): Promise<FeatureCollection<MultiPolygon, CountyProperties>>`
##### `getByCountyNameAndStateAb(countyName: string, stateAb: string): Promise<FeatureCollection<MultiPolygon, CountyProperties>>`
##### `getByStateAb(stateAb: string): Promise<FeatureCollection<MultiPolygon, CountyProperties>>`
##### `getInBoundingBox(northEast: number[], southWest: number[], intersect?: boolean): Promise<FeatureCollection<MultiPolygon, CountyProperties>>`
##### `getInRadius(latitude: number, longitude: number, radius: number): Promise<FeatureCollection<MultiPolygon, CountyProperties>>`

#### States

##### `getByStateAb(abbreviation: string): Promise<FeatureCollection<MultiPolygon, StateProperties>>`
##### `getByStateAbs(abbreviations: string[]): Promise<FeatureCollection<MultiPolygon, StateProperties>>`
##### `getInBoundingBox(northEast: number[], southWest: number[], intersect?: boolean): Promise<FeatureCollection<MultiPolygon, StateProperties>>`
##### `getInRadius(latitude: number, longitude: number, radius: number): Promise<FeatureCollection<MultiPolygon, StateProperties>>`

## jQuery

If you're upset that I decided to ditch jQuery don't be. I plan to write a wrapper and enable MapReflexClient to work as a jQuery plugin, though the API will break, that's for sure. You'll need to update your code if you plan to upgrade.

### Contribute

#### Building the library
Run npm install on repository root
```
npm install
```
#### For run demo you should bind the library
```shell
npm run build
npm run demo-server
```
