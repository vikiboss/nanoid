import {
  customAlphabet as __customAlphabet,
  customRandom as __customRandom,
  CustomRandomGenerator,
  nanoid as __nanoid,
} from './index.ts'

/**
 * generate a random id, but async
 */
export async function nanoid(size: number): Promise<string> {
  return await Promise.resolve(__nanoid(size))
}

/**
 * generate a random id from a custom alphabet, but async
 */
export async function customAlphabet(alphabet: string, size: number): Promise<() => string> {
  return await Promise.resolve(__customAlphabet(alphabet, size))
}

/**
 * create a custom random generator, but async
 */
export async function customRandom(
  random: CustomRandomGenerator,
  alphabet: string,
  size: number
): Promise<() => string> {
  return await Promise.resolve(__customRandom(random, alphabet, size))
}
