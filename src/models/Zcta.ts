import { MultiPolygon, Point } from 'geojson'

export interface Zcta {
  geoid: string
  zip: string
  affgeoid: string
  aland: number
  awater: number
  geometry: MultiPolygon
  centroid: Point
}

export interface ZctaProperties {
  geoid: string
  zip: string
  aland: number
  awater: number
  centroid: Point
}
