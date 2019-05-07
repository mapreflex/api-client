[![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg)](https://github.com/prettier/prettier)
[![Greenkeeper badge](https://badges.greenkeeper.io/mapreflex/api-client.svg)](https://greenkeeper.io/)
[![Travis](https://img.shields.io/travis/mapreflex/api-client.svg)](https://travis-ci.org/mapreflex/api-client)
[![Coveralls](https://img.shields.io/coveralls/mapreflex/api-client.svg)](https://coveralls.io/github/mapreflex/api-client)
[![Dev Dependencies](https://david-dm.org/mapreflex/api-client/dev-status.svg)](https://david-dm.org/mapreflex/api-client?type=dev)

# Mapreflex Client
A light client for

## For Development

This chapter intended for 'api-client' developers who also run 'MapReflex API server' locally.

When you run `index.html` from file system and 'MapReflex API server' locally (on the same host), every request will send `null` value in `Origin`header, which will cause CORS errors.
   
In order to avoid such CORS errors, `index.html` and `dist` folder should be hosted on any web server.

##### Setup a Simple HTTP Server with NodeJS #####

1. Download and Install NodeJS if needed.

2. Install the http-server package from npm:

   ```shell
   npm install -g http-server
   ```

3. Copy `index.html` and `dist` folder to your local file system. For example: `C:\projects\mapreflex-client-api`

4. Start a web server from a directory containing static website files.

   Change to the directory containing your static web files:
   ```shell
   cd C:\projects\mapreflex-client-api
   ```
   
   Start the server with this command:
   
   ```shell
   http-server
   ```
   
   You should see something like the following:
   
   ```shell
   C:\projects\mapreflex-client-api>http-server
   Starting up http-server, serving ./
   Available on:
     http://192.168.0.5:8080
     http://127.0.0.1:8080
   Hit CTRL-C to stop the server
   ```
   
5. Browse to your local website with a browser
    http://192.168.0.5:8080/index.html or http://localhost:8080/index.html


## Library Usage 

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

##### `getGeojsonByZipCode(zipCode: string): Promise<FeatureCollection<MultiPolygon, ZctaProperties>>`
    
##### `getByZipCode(zipCode: string): Promise<Zcta>`
    
##### `getByCountyNameAndStateAb(countyName: string, stateAb: string): Promise<Array<Zcta>>`
    
##### `getByGeoId(geoId: string): Promise<Zcta>`

##### `getGeojsonByZipCodes(zipCodes: Array<string>): Promise<FeatureCollection<MultiPolygon, ZctaProperties>>`

##### `getGeojsonInBoundingBox(northEast: Array<number>, southWest: Array<number>, intersect?: boolean): Promise<FeatureCollection<MultiPolygon, ZctaProperties>>`

##### `getInBoundingBox(northEast: Array<number>, southWest: Array<number>, intersect?: boolean): Promise<Array<Zcta>>`

##### `getGeojsonInRadius(latitude: number, longitude: number, radius: number): Promise<FeatureCollection<MultiPolygon, ZctaProperties>>`
    
##### `getInRadius(latitude: number, longitude: number, radius: number): Promise<Array<Zcta>>`

#### Counties

##### `getByStateAb(abbreviation: string): Promise<Array<County>>`

##### `getGeojsonByGeoId(geoId: string): Promise<FeatureCollection<MultiPolygon, CountyProperties>>`

##### `getByGeoId(geoId: string): Promise<County>`
    
##### `getGeojsonByCountyNameAndStateAb(countyName: string, stateAb: string): Promise<FeatureCollection<MultiPolygon, CountyProperties>>`
   
##### `getByCountyNameAndStateAb(countyName: string, stateAb: string): Promise<County>`
   
##### `getGeojsonByCountyNames(countyNames: Array<string>): Promise<FeatureCollection<MultiPolygon, CountyProperties>>`

##### `getGeojsonByStateAbs(abbreviations: Array<string>): Promise<FeatureCollection<MultiPolygon, CountyProperties>>`

##### `getGeojsonInBoundingBox(northEast: Array<number>, southWest: Array<number>, intersect?: boolean): Promise<FeatureCollection<MultiPolygon, CountyProperties>>`

##### `getInBoundingBox(northEast: Array<number>, southWest: Array<number>, intersect?: boolean): Promise<Array<County>>`

##### `getGeojsonInRadius(latitude: number, longitude: number, radius: number): Promise<FeatureCollection<MultiPolygon, CountyProperties>>`

##### `getInRadius(latitude: number, longitude: number, radius: number): Promise<Array<County>>`

#### States

##### `getByStateAb(abbreviation: string): Promise<State>`

##### `getAll(): Promise<Array<State>>`

##### `getGeojsonByStateAbs(abbreviations: Array<string>): Promise<FeatureCollection<MultiPolygon, StateProperties>>`

##### `getGeojsonInBoundingBox(northEast: Array<number>, southWest: Array<number>, intersect?: boolean): Promise<FeatureCollection<MultiPolygon, StateProperties>>`

##### `getInBoundingBox(northEast: Array<number>, southWest: Array<number>, intersect?: boolean): Promise<Array<State>>`
   
##### `getGeojsonInRadius(latitude: number, longitude: number, radius: number): Promise<FeatureCollection<MultiPolygon, StateProperties>>`

##### `getInRadius(latitude: number, longitude: number, radius: number): Promise<Array<State>>`

## jQuery

If you're upset that I decided to ditch jQuery don't be. I plan to write a wrapper and enable MapReflexClient to work as a jQuery plugin, though the API will break, that's for sure. You'll need to update your code if you plan to upgrade.
