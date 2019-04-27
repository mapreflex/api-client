import MapReflexClient from '../map-reflex-client'

export class Endpoint {
  protected readonly STATES_PATH: string = '/states'
  protected readonly STATES_SEARCH_PATH: string = this.STATES_PATH + '/search'
  protected readonly ZCTA_PATH: string = '/zcta'
  protected readonly ZCTA_SEARCH_PATH: string = this.ZCTA_PATH + '/search'
  protected readonly COUNTIES_PATH: string = '/counties'
  protected readonly COUNTIES_SEARCH_PATH: string = '/counties' + '/search'
  protected readonly ENTITY_PATH: string = '/entity'
  protected readonly IN_RADIUS_PATH: string = '/inRadius'
  protected readonly IN_BOUNDING_BOX_PATH: string = '/inBoundingBox'
  protected readonly BY_NAME_AND_STATE: string = '/byNameAndState'
  protected client: MapReflexClient

  constructor(client: MapReflexClient) {
    this.client = client
  }
}
