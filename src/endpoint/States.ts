import { Http } from './Http'
import { Path } from './Path'
import { StateProperties } from '../interfaces/State'
import { FeatureCollection, MultiPolygon } from 'geojson'
import { isArray } from '../helpers/utils'

export class States {
  private http: Http

  constructor(http: Http) {
    this.http = http
  }

  /**
   * @param {string} abbreviation (NY, AK, AI, LA, KY, etc)
   * @return {Promise<FeatureCollection<MultiPolygon, StateProperties>>}
   */
  async getByStateAb(
    abbreviation: string
  ): Promise<FeatureCollection<MultiPolygon, StateProperties>> {
    const stateAbURI: string = encodeURI(abbreviation)

    return this.http.get<FeatureCollection<MultiPolygon, StateProperties>>(
      `${Path.STATES_PATH}/${stateAbURI}`,
      {}
    )
  }

  /**
   * @param {string[]} abbreviations (KY, NY, AI, etc)
   * @return {Promise<FeatureCollection<MultiPolygon, StateProperties>>}
   */
  async getByStateAbs(
    abbreviations: string[]
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
   * @param {number[]} northEast(Coordinates of north-east corner [latitude, longitude] )
   * @param {number[]} southWest (Coordinates of south-west corner [latitude, longitude] )
   * @param {boolean} intersect (get states that intersect with the bounding box)
   * @return {Promise<FeatureCollection<MultiPolygon, StateProperties>>}
   */
  async getInBoundingBox(
    northEast: number[],
    southWest: number[],
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
   * @param {number} latitude
   * @param {number} longitude
   * @param {number} radius (size in miles min values is 1 max 500)
   * @return {Promise<FeatureCollection<MultiPolygon, StateProperties>>}
   */
  async getInRadius(
    latitude: number,
    longitude: number,
    radius: number
  ): Promise<FeatureCollection<MultiPolygon, StateProperties>> {
    const params = {
      latitude: latitude.toString(),
      longitude: longitude.toString(),
      radius: radius.toString()
    }
    return this.http.get<FeatureCollection<MultiPolygon, StateProperties>>(
      `${Path.STATES_SEARCH_PATH}${Path.IN_RADIUS_PATH}`,
      params
    )
  }
}
