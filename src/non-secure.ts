import { urlAlphabet } from './url-alphabet.ts'

export function customAlphabet(alphabet: readonly string[], defaultSize: number = 21) {
  return (size: number = defaultSize) => {
    let id = ''
    let i = size
    while (i--) id += alphabet[(Math.random() * alphabet.length) | 0]
    return id
  }
}

export function nanoid(size: number = 21) {
  let id = ''
  let i = size
  while (i--) id += urlAlphabet[(Math.random() * 64) | 0]
  return id
}