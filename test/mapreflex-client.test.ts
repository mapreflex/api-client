import Index from '../src/map-reflex-client'

/**
 * MapReflexClient test
 */
describe('MapReflexClient', () => {
  const TEST_KEY: string = 'sdfsdfaf'
  it('MapReflexClient class is instantiable', () => {
    expect(new Index(TEST_KEY)).toBeInstanceOf(Index)
  })
})
