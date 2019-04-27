import superagent, { Response } from 'superagent'
import { MapReflexOptions } from './models/MapReflexOptions'
import { Zctas } from './endpoints/Zctas'
import { States } from './endpoints/States'
import { Counties } from './endpoints/Counties'

class MapReflexClient {
  private apiKey: string = ''
  private baseUrl: string = ''

  zctas: Zctas = new Zctas(this)
  states: States = new States(this)
  counties: Counties = new Counties(this)

  private options: MapReflexOptions
  private defaultOptions: MapReflexOptions = {
    apiVersion: '/v1',
    apiUrl: ' https://www.mapreflex.com/api',
    country: '/us',
    authHeader: 'X-Mapreflex-Key',
    acceptHeader: 'application/json'
  }

  constructor(apiKey: string, options: MapReflexOptions = {} as MapReflexOptions) {
    this.apiKey = apiKey
    this.options = { ...this.defaultOptions, ...options }
    this.baseUrl = `${this.options.apiUrl}${this.options.apiVersion}${this.options.country}`
  }

  async get(url: string, params: { [key: string]: string }): Promise<Response> {
    return superagent
      .get(`${this.baseUrl}${url}`)
      .query(params)
      .set(this.options.authHeader, this.apiKey)
      .set('Accept', this.options.acceptHeader)
  }
}

export default MapReflexClient
