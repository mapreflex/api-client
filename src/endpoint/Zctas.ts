import { Http } from './Http'
import { Path } from './Path'
import { FeatureCollection, MultiPolygon } from 'geojson'
import { Zcta, ZctaProperties } from '../models/Zcta'
import { isArray } from '../helpers/utils'

export class Zctas {
  private http: Http

  constructor(http: Http) {
    this.http = http
  }

  /**
   * @deprecated
   * @param {string} zipCode
   * @return {Promise<FeatureCollection<MultiPolygon, ZctaProperties>>}
   */
  async getGeojsonByZipCode(
    zipCode: string
  ): Promise<FeatureCollection<MultiPolygon, ZctaProperties>> {
    const zipCodeURI = encodeURI(zipCode)

    return this.http.get<FeatureCollection<MultiPolygon, ZctaProperties>>(
      `${Path.ZCTA_PATH}/${zipCodeURI}`,
      {}
    )
  }

  /**
   * @param {string} zipCode
   * @return {Promise<Zcta>}
   */
  async getByZipCode(zipCode: string): Promise<Zcta> {
    const zipCodeURI = encodeURI(zipCode)

    return this.http.get<Zcta>(`${Path.ZCTA_PATH}/${zipCodeURI}${Path.ENTITY_PATH}`, {})
  }

  /**
   * @param {string} countyName (county name Adair)
   * @param {string} stateAb (state ab KY, NY, AI, AL)
   * @return {Promise<Array<Zcta>>}
   */
  async getByCountyNameAndStateAb(countyName: string, stateAb: string): Promise<Array<Zcta>> {
    const params = {
      county: countyName,
      stateAb: stateAb
    }

    return this.http.get<Array<Zcta>>(
      `${Path.ZCTA_SEARCH_PATH}/byCountyAndState${Path.ENTITY_PATH}`,
      params
    )
  }

  /**
   * @deprecated
   * @param {string} geoId
   * @returns {Promise<Zcta>}
   */
  async getByGeoId(geoId: string): Promise<Zcta> {
    const geoIdURI = encodeURI(geoId)

    return this.http.get<Zcta>(`${Path.ZCTA_SEARCH_PATH}/byGeoId/${geoIdURI}/entity`, {})
  }

  /**
   * @param {Array<string>} zipCodes (07001,11414)
   * @return {Promise<FeatureCollection<MultiPolygon, ZctaProperties>>}
   */
  async getGeojsonByZipCodes(
    zipCodes: Array<string>
  ): Promise<FeatureCollection<MultiPolygon, ZctaProperties>> {
    isArray(zipCodes)
    const params = {
      zipCodes: zipCodes.join(',')
    }

    return this.http.get<FeatureCollection<MultiPolygon, ZctaProperties>>(
      `${Path.ZCTA_SEARCH_PATH}/byZipCodes`,
      params
    )
  }

  /**
   * @param {Array<number>} northEast (Coordinates of north-east corner [latitude, longitude] )
   * @param {Array<number>} southWest (Coordinates of south-west corner [latitude, longitude] )
   * @param {boolean} intersect (get zips that intersect with the bounding box)
   * @return {Promise<FeatureCollection<MultiPolygon, ZctaProperties>>}
   */
  async getGeojsonInBoundingBox(
    northEast: Array<number>,
    southWest: Array<number>,
    intersect: boolean = true
  ): Promise<FeatureCollection<MultiPolygon, ZctaProperties>> {
    isArray(northEast)
    isArray(southWest)
    const params = {
      intersect: intersect.toString(),
      northEast: northEast.join(','),
      southWest: southWest.join(',')
    }

    return this.http.get<FeatureCollection<MultiPolygon, ZctaProperties>>(
      `${Path.ZCTA_SEARCH_PATH}${Path.IN_BOUNDING_BOX_PATH}`,
      params
    )
  }

  /**
   * @param {Array<number>} northEast (Coordinates of north-east corner [latitude, longitude] )
   * @param {Array<number>} southWest (Coordinates of south-west corner [latitude, longitude] )
   * @param {boolean} intersect (get zips that intersect with the bounding box)
   * @return {Promise<Array<Zcta>>}
   */
  async getInBoundingBox(
    northEast: Array<number>,
    southWest: Array<number>,
    intersect: boolean = true
  ): Promise<Array<Zcta>> {
    isArray(northEast)
    isArray(southWest)
    const params = {
      intersect: intersect.toString(),
      northEast: northEast.join(','),
      southWest: southWest.join(',')
    }

    return this.http.get<Array<Zcta>>(
      `${Path.ZCTA_SEARCH_PATH}${Path.IN_BOUNDING_BOX_PATH}${Path.ENTITY_PATH}`,
      params
    )
  }

  /**
   * @param {number} latitude
   * @param {number} longitude
   * @param {number} radius (size in miles min values is 1 max 500)
   * @return {Promise<FeatureCollection<MultiPolygon, ZctaProperties>>}
   */
  async getGeojsonInRadius(
    latitude: number,
    longitude: number,
    radius: number
  ): Promise<FeatureCollection<MultiPolygon, ZctaProperties>> {
    const params = {
      latitude: latitude.toString(),
      longitude: latitude.toString(),
      radius: radius.toString()
    }

    return this.http.get<FeatureCollection<MultiPolygon, ZctaProperties>>(
      `${Path.ZCTA_SEARCH_PATH}${Path.IN_RADIUS_PATH}`,
      params
    )
  }

  /**
   * @param {number} latitude
   * @param {number} longitude
   * @param {number} radius (size in miles min values is 1 max 500)
   * @return {Promise<Array<Zcta>>}
   */
  async getInRadius(latitude: number, longitude: number, radius: number): Promise<Array<Zcta>> {
    const params = {
      latitude: latitude.toString(),
      longitude: latitude.toString(),
      radius: radius.toString()
    }

    return this.http.get<Array<Zcta>>(
      `${Path.ZCTA_SEARCH_PATH}${Path.IN_RADIUS_PATH}${Path.ENTITY_PATH}`,
      params
    )
  }
}
