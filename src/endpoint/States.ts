import { Http } from './Http'
import { Path } from './Path'
import { State, StateProperties } from '../models/State'
import { FeatureCollection, MultiPolygon } from 'geojson'
import { County } from '../models/County'
import { isArray } from '../helpers/utils'

export class States {
  private http: Http

  constructor(http: Http) {
    this.http = http
  }

  /**
   * @param {string} abbreviation (NY, AK, AI, LA, KY, etc)
   * @return {Promise<State>}
   */
  async getByStateAb(abbreviation: string): Promise<State> {
    const stateAbURI: string = encodeURI(abbreviation)

    return this.http.get<State>(`${Path.STATES_PATH}/${stateAbURI}${Path.ENTITY_PATH}`, {})
  }

  /**
   * @return {Promise<Array<State>>}
   */
  async getAll(): Promise<Array<State>> {
    return this.http.get<Array<State>>(`${Path.STATES_PATH}${Path.ENTITY_PATH}`, {})
  }

  /**
   * @param {Array<string>} abbreviations (KY, NY, AI, etc)
   * @return {Promise<FeatureCollection<MultiPolygon, StateProperties>>}
   */
  async getGeojsonByStateAbs(
    abbreviations: Array<string>
  ): Promise<FeatureCollection<MultiPolygon, StateProperties>> {
    isArray(abbreviations)
    const params = {
      abs: abbreviations.join(',')
    }

    return this.http.get<FeatureCollection<MultiPolygon, StateProperties>>(
      `${Path.STATES_SEARCH_PATH}/byAbs`,
      params
    )
  }

  /**
   * @param {Array<number>} northEast(Coordinates of north-east corner [latitude, longitude] )
   * @param {Array<number>} southWest (Coordinates of south-west corner [latitude, longitude] )
   * @param {boolean} intersect (get states that intersect with the bounding box)
   * @return {Promise<FeatureCollection<MultiPolygon, StateProperties>>}
   */
  async getGeojsonInBoundingBox(
    northEast: Array<number>,
    southWest: Array<number>,
    intersect: boolean = true
  ): Promise<FeatureCollection<MultiPolygon, StateProperties>> {
    isArray(northEast)
    isArray(southWest)
    const params = {
      intersect: intersect.toString(),
      northEast: northEast.join(','),
      southWest: southWest.join(',')
    }

    return this.http.get<FeatureCollection<MultiPolygon, StateProperties>>(
      `${Path.STATES_SEARCH_PATH}${Path.IN_BOUNDING_BOX_PATH}`,
      params
    )
  }

  /**
   * @param {Array<number>} northEast(Coordinates of north-east corner [latitude, longitude] )
   * @param {Array<number>} southWest (Coordinates of south-west corner [latitude, longitude] )
   * @param {boolean} intersect (get states that intersect with the bounding box)
   * @return {Promise<Array<State>>}
   */
  async getInBoundingBox(
    northEast: Array<number>,
    southWest: Array<number>,
    intersect: boolean = true
  ): Promise<Array<State>> {
    isArray(northEast)
    isArray(southWest)
    const params = {
      intersect: intersect.toString(),
      northEast: northEast.join(','),
      southWest: southWest.join(',')
    }

    return this.http.get<Array<State>>(
      `${Path.STATES_SEARCH_PATH}${Path.IN_BOUNDING_BOX_PATH}${Path.ENTITY_PATH}`,
      params
    )
  }

  /**
   * @param {number} latitude
   * @param {number} longitude
   * @param {number} radius (size in miles min values is 1 max 500)
   * @return {Promise<FeatureCollection<MultiPolygon, StateProperties>>}
   */
  async getGeojsonInRadius(
    latitude: number,
    longitude: number,
    radius: number
  ): Promise<FeatureCollection<MultiPolygon, StateProperties>> {
    const params = {
      latitude: latitude.toString(),
      longitude: latitude.toString(),
      radius: radius.toString()
    }

    return this.http.get<FeatureCollection<MultiPolygon, StateProperties>>(
      `${Path.STATES_SEARCH_PATH}${Path.IN_RADIUS_PATH}`,
      params
    )
  }

  /**
   * @param {number} latitude
   * @param {number} longitude
   * @param {number} radius (size in miles min values is 1 max 500)
   * @return {Promise<Array<State>>}
   */
  async getInRadius(latitude: number, longitude: number, radius: number): Promise<Array<State>> {
    const params = {
      latitude: latitude.toString(),
      longitude: latitude.toString(),
      radius: radius.toString()
    }

    return this.http.get<Array<State>>(
      `${Path.STATES_SEARCH_PATH}${Path.IN_RADIUS_PATH}${Path.ENTITY_PATH}`,
      params
    )
  }
}
