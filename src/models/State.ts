import { MultiPolygon, Point } from 'geojson'

export interface State {
  fipsCode: string
  stusab: string
  name: string
  statens: string
  geometry: MultiPolygon
  centroid: Point
}

export interface StateProperties {
  name: string
  statens: string
  fips_code: string
  stusab: string
  centroid: Point
}
