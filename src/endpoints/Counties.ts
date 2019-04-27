import { Response } from 'superagent'
import { Endpoint } from './Endpoint'
import MapReflexClient from '../map-reflex-client'

export class Counties extends Endpoint {
  constructor(client: MapReflexClient) {
    super(client)
  }

  async getGeojsonByGeoId(geoId: string): Promise<Response> {
    return this.client.get(`${this.COUNTIES_PATH}/${geoId}`, {})
  }

  async getByGeoId(geoId: string): Promise<Response> {
    return this.client.get(`${this.COUNTIES_PATH}/${geoId}${this.ENTITY_PATH}`, {})
  }

  /**
   * @deprecated
   * @param countyName
   * @param stateAb
   */
  async getGeojsonByCountyAndStateAbs(countyName: string, stateAb: string): Promise<Response> {
    const params = {
      name: countyName,
      stateAb: stateAb
    }

    return this.client.get(`${this.COUNTIES_SEARCH_PATH}${this.BY_NAME_AND_STATE}`, params)
  }

  async getByCountyAndStateAbs(countyName: string, stateAb: string): Promise<Response> {
    const params = {
      name: countyName,
      stateAb: stateAb
    }

    return this.client.get(
      `${this.COUNTIES_SEARCH_PATH}${this.BY_NAME_AND_STATE}${this.ENTITY_PATH}`,
      params
    )
  }

  async getGeojsonByNames(names: Array<string>): Promise<Response> {
    const params = {
      names: names.join(',')
    }

    return this.client.get(`${this.COUNTIES_SEARCH_PATH}/byNames`, params)
  }

  async getGeojsonByStateAbs(abbreviations: Array<string>): Promise<Response> {
    const params = {
      abbreviations: abbreviations.join(',')
    }

    return this.client.get(`${this.COUNTIES_SEARCH_PATH}/byStates`, params)
  }

  /**
   * @param northEast
   * @param southWest
   * @param intersect get counties that intersect with the bounding box
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

    return this.client.get(`${this.COUNTIES_SEARCH_PATH}${this.IN_BOUNDING_BOX_PATH}`, params)
  }

  /**
   * @param northEast
   * @param southWest
   * @param intersect get counties that intersect with the bounding box
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
      `${this.COUNTIES_SEARCH_PATH}${this.IN_BOUNDING_BOX_PATH}${this.ENTITY_PATH}`,
      params
    )
  }

  /**
   * Get counties geojson in Radius
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

    return this.client.get(`${this.COUNTIES_SEARCH_PATH}${this.IN_RADIUS_PATH}`, params)
  }

  /**
   * Get counties in Radius
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
      `${this.COUNTIES_SEARCH_PATH}${this.IN_RADIUS_PATH}${this.ENTITY_PATH}`,
      params
    )
  }
}
