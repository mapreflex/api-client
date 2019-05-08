import superagent, { Response } from 'superagent'

import { MapreflexOptions } from '../interfaces/Options'

export class Http {
  private options: MapreflexOptions

  constructor(options: MapreflexOptions) {
    this.options = options
  }

  get<T>(url: string, params: { [key: string]: string }): Promise<T> {
    const path = this.getApiPath()
    return superagent
      .get(`${path}${url}`)
      .query(params)
      .set(this.options.authHeader, this.options.apiKey)
      .set('Accept', this.options.acceptHeader)
      .then((response: Response) => this.map<T>(response))
  }

  private map<T>(response: Response): Promise<T> {
    return new Promise<T>((resolve, reject) => {
      resolve(response.body as T)
    })
  }

  private getApiPath(): string {
    return `${this.options.apiUrl}${this.options.apiEndpoint}${this.options.apiVersion}${
      this.options.country
    }`
  }
}
