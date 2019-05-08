export function isArray(array: Array<any>): never | void {
  if (!Array.isArray(array)) {
    throw new Error('Parameter has to be an Array')
  }
}
