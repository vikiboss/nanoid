/**
 * A custom random generator function.
 */
export type CustomRandomGenerator = (size: number) => Uint8Array | Uint16Array | Uint32Array

/**
 * create a custom random generator
 * 
 * @example
 * 
 * import { customRandom } from 'https://deno.land/x/nanoid/custom-random.ts'
 * 
 * const random = customRandom(size => {
 *   const bytes = new Uint8Array(size)
 *   crypto.getRandomValues(bytes)
 *   return bytes
 * }, 'abcdef', 5)
 */
export function customRandom(
  random: CustomRandomGenerator,
  alphabet: string,
  size: number
): () => string {
  const mask = (2 << (Math.log(alphabet.length - 1) / Math.LN2)) - 1
  const step = -~((1.6 * mask * size) / alphabet.length)

  return (): string => {
    let id = ''
    while (true) {
      const bytes = random(step)
      let i = step
      while (i--) {
        id += alphabet[bytes[i] & mask] || ''
        if (id.length === +size) return id
      }
    }
  }
}
