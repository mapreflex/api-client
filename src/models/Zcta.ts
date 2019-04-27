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
