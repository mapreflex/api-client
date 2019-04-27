import { MultiPolygon, Point } from 'geojson'

export interface County {
  geoid: string
  statefp: string
  countyfp: string
  countyns: string
  affgeoid: string
  name: string
  lsad: string
  aland: number
  awater: number
  geometry: MultiPolygon
  centroid: Point
}
