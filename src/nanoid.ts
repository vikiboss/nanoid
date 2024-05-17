import { random } from './random.ts'
import { urlAlphabet } from './url-alphabet.ts'

export function nanoid(size: number = 21): string {
  let id: string = ''
  const bytes: Uint8Array = random(size)
  while (size--) id += urlAlphabet[bytes[size] & 63]
  return id
}
