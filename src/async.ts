import {
  customAlphabet as __customAlphabet,
  customRandom as __customRandom,
  CustomRandomGenerator,
  nanoid as __nanoid,
} from './index.ts'

export async function nanoid(size: number): Promise<string> {
  return await Promise.resolve(__nanoid(size))
}

export async function customAlphabet(alphabet: string, size: number): Promise<() => string> {
  return await Promise.resolve(__customAlphabet(alphabet, size))
}

export async function customRandom(
  random: CustomRandomGenerator,
  alphabet: string,
  size: number
): Promise<() => string> {
  return await Promise.resolve(__customRandom(random, alphabet, size))
}
