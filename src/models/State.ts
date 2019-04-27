import { MultiPolygon, Point } from 'geojson'

export interface State {
  fipsCode: string
  stusab: string
  name: string
  statens: string
  geometry: MultiPolygon
  centroid: Point
}
