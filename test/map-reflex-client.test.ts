import MapReflexClient from '../src/map-reflex-client'

/**
 * MapReflexClient test
 */
describe('MapReflexClient', () => {
  const TEST_KEY: string = 'sdfsdfaf'
  it('MapReflexClient class is instantiable', () => {
    expect(new MapReflexClient(TEST_KEY)).toBeInstanceOf(MapReflexClient)
  })
})
