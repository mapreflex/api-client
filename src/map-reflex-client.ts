import superagent, { Response } from 'superagent';
import { Feature, FeatureCollection } from 'geojson';

class MapReflexClient {
  private apiKey: string = '';
  private apiUrl: string = 'http://localhost:8033/api';
  private apiVer: string = '/v1';
  private region: string = '/us';
  private headerKey: string = 'X-Mapreflex-Key';
  private baseUrl: string = '';

  constructor(apiKey: string, options: {}) {
    this.apiKey = apiKey;
    this.baseUrl = `${this.apiUrl}${this.apiVer}${this.region}`;
  }

  async getZipsGeoJsonByZipCodes(zipCodes: Array<string>): Promise<Response> {
    const params = {
      'zipCodes': zipCodes.join(',')
    };

    return this.ajaxGet('/zcta/search/byZipCodes', params);
  }

  async getStateGeoJsonByAbs(abbreviations: Array<string>): Promise<Response> {
    const params = {
      'abbreviations': abbreviations.join(',')
    };

    return this.ajaxGet('/states/search/byAbs', params)
  }

  private async ajaxGet(url: string, params: { [key: string]: string }): Promise<Response> {
    return superagent
      .get(`${this.baseUrl}${url}`)
      .query(params)
      .set(this.headerKey, this.apiKey)
      .set('Accept', 'application/json');
  }
}

export default MapReflexClient;
