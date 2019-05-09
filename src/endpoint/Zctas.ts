import { Http } from './Http'
import { Path } from './Path'
import { FeatureCollection, MultiPolygon } from 'geojson'
import { ZctaProperties } from '../interfaces/Zcta'
import { isArray } from '../helpers/utils'

export class Zctas {
  private http: Http

  constructor(http: Http) {
    this.http = http
  }

  /**
   * @param {string} zipCode
   * @return {Promise<FeatureCollection<MultiPolygon, ZctaProperties>>}
   */
  async getByZipCode(zipCode: string): Promise<FeatureCollection<MultiPolygon, ZctaProperties>> {
    const zipCodeURI = encodeURI(zipCode)

    return this.http.get<FeatureCollection<MultiPolygon, ZctaProperties>>(
      `${Path.ZCTA_PATH}/${zipCodeURI}`,
      {}
    )
  }

  /**
   * @param {string} countyGeoId
   * @return {Promise<FeatureCollection<MultiPolygon, ZctaProperties>>}
   */
  async getByCountyGeoId(
    countyGeoId: string
  ): Promise<FeatureCollection<MultiPolygon, ZctaProperties>> {
    const params = {
      countyGeoId: countyGeoId
    }

    return this.http.get(`${Path.ZCTA_SEARCH_PATH}/byCounty`, params)
  }

  /**
   * @param {string} countyName (Adair, Bronx)
   * @param {string} stateAb (KY, NY, AL, OK)
   * @return {Promise<FeatureCollection<MultiPolygon, ZctaProperties>>}
   */
  async getByCountyNameAndStateAb(
    countyName: string,
    stateAb: string
  ): Promise<FeatureCollection<MultiPolygon, ZctaProperties>> {
    const params = {
      county: countyName,
      stateAb: stateAb
    }

    return this.http.get(`${Path.ZCTA_SEARCH_PATH}/byCountyAndState`, params)
  }

  /**
   * @param {string} zipCodes (07001,11414)
   * @return {Promise<FeatureCollection<MultiPolygon, ZctaProperties>>}
   */
  async getByZipCodes(
    zipCodes: string[]
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
   * @param {number} northEast (Coordinates of north-east corner [latitude, longitude] )
   * @param {number} southWest (Coordinates of south-west corner [latitude, longitude] )
   * @param {boolean} intersect (get zips that intersect with the bounding box)
   * @return {Promise<FeatureCollection<MultiPolygon, ZctaProperties>>}
   */
  async getInBoundingBox(
    northEast: number[],
    southWest: number[],
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
   * @param {number} latitude
   * @param {number} longitude
   * @param {number} radius (size in miles min values is 1 max 500)
   * @return {Promise<FeatureCollection<MultiPolygon, ZctaProperties>>}
   */
  async getInRadius(
    latitude: number,
    longitude: number,
    radius: number
  ): Promise<FeatureCollection<MultiPolygon, ZctaProperties>> {
    const params = {
      latitude: latitude.toString(),
      longitude: longitude.toString(),
      radius: radius.toString()
    }

    return this.http.get<FeatureCollection<MultiPolygon, ZctaProperties>>(
      `${Path.ZCTA_SEARCH_PATH}${Path.IN_RADIUS_PATH}`,
      params
    )
  }
}
