export class Path {
  static readonly STATES_PATH: string = '/states'
  static readonly STATES_SEARCH_PATH: string = Path.STATES_PATH + '/search'
  static readonly ZCTA_PATH: string = '/zcta'
  static readonly ZCTA_SEARCH_PATH: string = Path.ZCTA_PATH + '/search'
  static readonly COUNTIES_PATH: string = '/counties'
  static readonly COUNTIES_SEARCH_PATH: string = Path.COUNTIES_PATH + '/search'
  static readonly ENTITY_PATH: string = '/entity'
  static readonly IN_RADIUS_PATH: string = '/inRadius'
  static readonly IN_BOUNDING_BOX_PATH: string = '/inBoundingBox'
  static readonly BY_NAME_AND_STATE: string = '/byNameAndState'

  // protected async oldget(url: string, params: { [key: string]: string }): Promise<Response> {
  //   let encodedUrlParams = Object.keys(params)
  //     .map(key => `${key}=${encodeURIComponent(params[key])}`)
  //     .join('&')
  //   if (encodedUrlParams) {
  //     encodedUrlParams = '?' + encodedUrlParams
  //   }
  //   return new Promise<any>((resolve, reject) => {
  //     const path = this.getApiPath();
  //     let xhr = new XMLHttpRequest()
  //     xhr.open('GET', `${path}${url}${encodedUrlParams}`)
  //     xhr.setRequestHeader(this.options.authHeader, this.options.apiKey)
  //     xhr.setRequestHeader('Accept', this.options.acceptHeader)
  //     xhr.onload = function() {
  //       if (this.status >= 200 && this.status < 300) {
  //         resolve(JSON.parse(xhr.response))
  //       } else {
  //         reject(xhr.response)
  //       }
  //     }
  //     xhr.onerror = function() {
  //       reject(xhr.response)
  //     }
  //     xhr.send()
  //   })
  // }

  // private getApiPath(): string {
  //   return `${this.options.apiUrl}${this.options.apiEndpoint}${this.options.apiVersion}${this.options.country}`;
  // }
}
