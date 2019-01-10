export type CacheValue = string | number | boolean | object
let cache = new Map<string, CacheValue>()

export function get(property: string, value: CacheValue) {
  return cache.get(property + value)
}

export function set(property: string, value: CacheValue, className: string) {
  if (process.env.NODE_ENV !== 'production') {
    const valueType = typeof value
    if (
      valueType !== 'boolean' &&
      valueType !== 'number' &&
      valueType !== 'string'
    ) {
      const encodedValue = JSON.stringify(value)
      throw new TypeError(
        `📦 ui-box: invalid cache value “${encodedValue}”. Only booleans, numbers and strings are supported.`
      )
    }
  }

  cache.set(property + value, className)
}

export function entries() {
  return [...cache]
}

type CacheEntry = [string, CacheValue]
export function hydrate(newEntries: CacheEntry[]) {
  cache = new Map<string, CacheValue>([...cache, ...newEntries])
}

export function clear() {
  cache.clear()
}
