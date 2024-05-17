/**
 * @param bytes The desired length of the Uint8Array to be created.
 */
export type RandomValueFunction = typeof random

/**
 * @param bytes The desired length of the Uint8Array to be created.
 */
export function random(bytes: number): Uint8Array {
  return crypto.getRandomValues(new Uint8Array(bytes))
}
