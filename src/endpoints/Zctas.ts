import { Response } from 'superagent'
import MapReflexClient from '../map-reflex-client'
import { Endpoint } from './Endpoint'

export class Zctas extends Endpoint {
  constructor(client: MapReflexClient) {
    super(client)
  }

  /**
   * @deprecated
   * @param zipCode
   */
  async getGeoJsonByZipCode(zipCode: string): Promise<Response> {
    return this.client.get(`${this.ZCTA_PATH}/${zipCode}`, {})
  }

  async getByZipCode(zipCode: string): Promise<Response> {
    return this.client.get(`${this.ZCTA_PATH}/${zipCode}${this.ENTITY_PATH}`, {})
  }

  async getByCountyAndState(county: string, state: string): Promise<Response> {
    const params = {
      county: county.toLowerCase(),
      stateAb: state.toLocaleUpperCase()
    }

    return this.client.get(`${this.ZCTA_SEARCH_PATH}/byCountyAndState${this.ENTITY_PATH}`, params)
  }

  async getGeojsonByZipCodes(zipCodes: Array<string>): Promise<Response> {
    const params = {
      zipCodes: zipCodes.join(',')
    }

    return this.client.get(`${this.ZCTA_SEARCH_PATH}/byZipCodes`, params)
  }

  /**
   * @param northEast
   * @param southWest
   * @param intersect get zips that intersect with the bounding box
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

    return this.client.get(`${this.ZCTA_SEARCH_PATH}${this.IN_BOUNDING_BOX_PATH}`, params)
  }

  /**
   * @param northEast
   * @param southWest
   * @param intersect get zips that intersect with the bounding box
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
      `${this.ZCTA_SEARCH_PATH}${this.IN_BOUNDING_BOX_PATH}${this.ENTITY_PATH}`,
      params
    )
  }

  /**
   * Get zcta geojson in Radius
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

    return this.client.get(`${this.ZCTA_SEARCH_PATH}${this.IN_RADIUS_PATH}`, params)
  }

  /**
   * Get zcta in Radius
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
      `${this.ZCTA_SEARCH_PATH}${this.IN_RADIUS_PATH}${this.ENTITY_PATH}`,
      params
    )
  }
}
