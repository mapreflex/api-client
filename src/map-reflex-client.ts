import { Zctas } from './endpoint/Zctas'
import { States } from './endpoint/States'
import { Counties } from './endpoint/Counties'
import { MapReflexOptions, Options } from './models/Options'
import { Http } from './endpoint/Http'

const defaultOptions: MapReflexOptions = {
  apiVersion: '/v1',
  apiUrl: ' https://www.mapreflex.com',
  apiEndpoint: '/api',
  country: '/us',
  authHeader: 'X-Mapreflex-Key',
  acceptHeader: 'application/json',
  apiKey: ''
}

class MapReflexClient {
  options: MapReflexOptions

  zctas: Zctas
  states: States
  counties: Counties

  constructor(options?: Options) {
    this.options = { ...defaultOptions, ...(options || {}) }
    this.zctas = new Zctas(new Http(this.options))
    this.states = new States(new Http(this.options))
    this.counties = new Counties(new Http(this.options))
  }
}

export default MapReflexClient
