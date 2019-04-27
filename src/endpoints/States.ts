import { Response } from 'superagent'
import MapReflexClient from '../map-reflex-client'
import { Endpoint } from './Endpoint'

export class States extends Endpoint {
  constructor(client: MapReflexClient) {
    super(client)
  }

  async getCountiesByStateAbs(abbreviation: string): Promise<Response> {
    const stateAb: string = abbreviation.toUpperCase()

    return this.client.get(
      `${this.STATES_PATH}/${stateAb}${this.COUNTIES_PATH}${this.ENTITY_PATH}`,
      {}
    )
  }

  async getStateByStateAbs(abbreviation: string): Promise<Response> {
    const stateAb: string = abbreviation.toUpperCase()

    return this.client.get(`${this.STATES_PATH}/${stateAb}${this.ENTITY_PATH}`, {})
  }

  async getAll(): Promise<Response> {
    return this.client.get(`${this.STATES_PATH}${this.ENTITY_PATH}`, {})
  }

  async getAllGeojson(abbreviations: Array<string>): Promise<Response> {
    const params = {
      abbreviations: abbreviations.join(',')
    }

    return this.client.get(`${this.STATES_SEARCH_PATH}/byAbs`, params)
  }

  /**
   * @param northEast
   * @param southWest
   * @param intersect get state that intersect with the bounding box
   */
  async getGeojsonInBoundingBox(
    northEast: Array<number>,
    southWest: Array<number>,
    intersect: boolean = true
  ): Promise<Response> {
    const params = {
      intersect: intersect.toString(),
      northEast: northEast.join(','),
      southWest: southWest.join(',')
    }

    return this.client.get(`${this.STATES_SEARCH_PATH}${this.IN_BOUNDING_BOX_PATH}`, params)
  }

  /**
   * @param northEast
   * @param southWest
   * @param intersect get state that intersect with the bounding box
   */
  async getInBoundingBox(
    northEast: Array<number>,
    southWest: Array<number>,
    intersect: boolean = true
  ): Promise<Response> {
    const params = {
      intersect: intersect.toString(),
      northEast: northEast.join(','),
      southWest: southWest.join(',')
    }

    return this.client.get(
      `${this.STATES_SEARCH_PATH}${this.IN_BOUNDING_BOX_PATH}${this.ENTITY_PATH}`,
      params
    )
  }

  /**
   * Get state geojson in Radius
   * @param latitude
   * @param longitude
   * @param radius radius size in miles min values is 1 max 500
   */
  async getGeojsonInRadius(latitude: number, longitude: number, radius: number): Promise<Response> {
    const params = {
      latitude: latitude.toString(),
      longitude: latitude.toString(),
      radius: radius.toString()
    }

    return this.client.get(`${this.STATES_SEARCH_PATH}${this.IN_RADIUS_PATH}`, params)
  }

  /**
   * Get state geojson in Radius
   * @param latitude
   * @param longitude
   * @param radius radius size in miles min values is 1 max 500
   */
  async getInRadius(latitude: number, longitude: number, radius: number): Promise<Response> {
    const params = {
      latitude: latitude.toString(),
      longitude: latitude.toString(),
      radius: radius.toString()
    }

    return this.client.get(
      `${this.STATES_SEARCH_PATH}${this.IN_RADIUS_PATH}${this.ENTITY_PATH}`,
      params
    )
  }
}
