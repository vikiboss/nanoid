import { urlAlphabet } from './url-alphabet.ts'

/**
 * generate a random id from a custom alphabet, but non-secure
 */
export function customAlphabet(
  alphabet: readonly string[],
  defaultSize: number = 21
): (size?: number) => string {
  return (size: number = defaultSize): string => {
    let id = ''
    let i = size
    while (i--) id += alphabet[(Math.random() * alphabet.length) | 0]
    return id
  }
}

/**
 * generate a random id, but non-secure
 */
export function nanoid(size: number = 21): string {
  let id = ''
  let i = size
  while (i--) id += urlAlphabet[(Math.random() * 64) | 0]
  return id
}
