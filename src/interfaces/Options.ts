export interface MapreflexOptions {
  apiKey: string
  apiUrl: string
  apiEndpoint: string
  apiVersion: string
  country: string
  authHeader: string
  acceptHeader: string
}

export interface Options extends Partial<MapreflexOptions> {}
