import { Http } from './Http'
import { Path } from './Path'
import { FeatureCollection, MultiPolygon } from 'geojson'
import { CountyProperties } from '../interfaces/County'
import { isArray } from '../helpers/utils'

export class Counties {
  private http: Http

  constructor(http: Http) {
    this.http = http
  }

  /**
   * @param {string} geoId
   * @return {Promise<FeatureCollection<MultiPolygon, CountyProperties>>}
   */
  async getByGeoId(geoId: string): Promise<FeatureCollection<MultiPolygon, CountyProperties>> {
    const geoIdURI = encodeURI(geoId)

    return this.http.get<FeatureCollection<MultiPolygon, CountyProperties>>(
      `${Path.COUNTIES_PATH}/${geoIdURI}`,
      {}
    )
  }

  /**
   * @param {string[]} geoIds
   * @return {Promise<FeatureCollection<MultiPolygon, CountyProperties>>}
   */
  async getByGeoIds(geoIds: string[]): Promise<FeatureCollection<MultiPolygon, CountyProperties>> {
    isArray(geoIds)
    const params = {
      geoids: geoIds.join(',')
    }

    return this.http.get<FeatureCollection<MultiPolygon, CountyProperties>>(
      `${Path.COUNTIES_SEARCH_PATH}/byGeoIds`,
      params
    )
  }

  /**
   * @param {string} countyName (County name Adair, etc)
   * @param {string} stateAb (NY, KY, AI, AL, etc)
   * @return {Promise<FeatureCollection<MultiPolygon, CountyProperties>>}
   */
  async getByCountyNameAndStateAb(
    countyName: string,
    stateAb: string
  ): Promise<FeatureCollection<MultiPolygon, CountyProperties>> {
    const params = {
      name: countyName,
      stateAb: stateAb
    }

    return this.http.get<FeatureCollection<MultiPolygon, CountyProperties>>(
      `${Path.COUNTIES_SEARCH_PATH}${Path.BY_NAME_AND_STATE}`,
      params
    )
  }

  /**
   * @deprecated
   * @param {string[]} countyNames (Adair, etc)
   * @return {Promise<FeatureCollection<MultiPolygon, CountyProperties>>}
   */
  async getByCountyNames(
    countyNames: string[]
  ): Promise<FeatureCollection<MultiPolygon, CountyProperties>> {
    isArray(countyNames)
    const params = {
      names: countyNames.join(',')
    }

    return this.http.get<FeatureCollection<MultiPolygon, CountyProperties>>(
      `${Path.COUNTIES_SEARCH_PATH}/byNames`,
      params
    )
  }

  /**
   * @param {string} stateAb (NY,KY,AI, etc)
   * @return {Promise<FeatureCollection<MultiPolygon, CountyProperties>>}
   */
  async getByStateAb(stateAb: string): Promise<FeatureCollection<MultiPolygon, CountyProperties>> {
    const params = {
      statesAb: stateAb
    }

    return this.http.get<FeatureCollection<MultiPolygon, CountyProperties>>(
      `${Path.COUNTIES_SEARCH_PATH}/byState`,
      params
    )
  }

  /**
   * @param {number[]} northEast (Coordinates of north-east corner [latitude, longitude] )
   * @param {number[]} southWest (Coordinates of south-west corner [latitude, longitude] )
   * @param {boolean} intersect (get counties that intersect with the bounding box)
   * @return {Promise<FeatureCollection<MultiPolygon, CountyProperties>>}
   */
  async getInBoundingBox(
    northEast: number[],
    southWest: number[],
    intersect: boolean = true
  ): Promise<FeatureCollection<MultiPolygon, CountyProperties>> {
    isArray(northEast)
    isArray(southWest)
    const params = {
      intersect: intersect.toString(),
      northEast: northEast.join(','),
      southWest: southWest.join(',')
    }

    return this.http.get<FeatureCollection<MultiPolygon, CountyProperties>>(
      `${Path.COUNTIES_SEARCH_PATH}${Path.IN_BOUNDING_BOX_PATH}`,
      params
    )
  }

  /**
   * @param {number} latitude
   * @param {number} longitude
   * @param {number} radius (size in miles min values is 1 max 500)
   * @return {Promise<FeatureCollection<MultiPolygon, CountyProperties>>}
   */
  async getInRadius(
    latitude: number,
    longitude: number,
    radius: number
  ): Promise<FeatureCollection<MultiPolygon, CountyProperties>> {
    const params = {
      latitude: latitude.toString(),
      longitude: latitude.toString(),
      radius: radius.toString()
    }
    return this.http.get<FeatureCollection<MultiPolygon, CountyProperties>>(
      `${Path.COUNTIES_SEARCH_PATH}${Path.IN_RADIUS_PATH}`,
      params
    )
  }
}
