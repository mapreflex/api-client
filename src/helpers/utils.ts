export function capitalize(string: string): string {
  let [s, ...tring] = string.toString().toLowerCase() as any
  return [s.toUpperCase(), ...tring].join('')
}

export function isArray(array: Array<any>): never | void {
  if (!Array.isArray(array)) {
    throw new Error('Parameter has to be an Array')
  }
}
