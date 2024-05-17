import { nanoid } from '../src/index.ts'

console.time('nanoid (x100)')
for (let i = 0; i < 100; i++) nanoid()
console.timeEnd('nanoid (x100)')

console.time('nanoid (x1,000)')
for (let i = 0; i < 1000; i++) nanoid()
console.timeEnd('nanoid (x1,000)')

console.time('nanoid (x10,000)')
for (let i = 0; i < 10000; i++) nanoid()
console.timeEnd('nanoid (x10,000)')

console.time('nanoid (x100,000)')
for (let i = 0; i < 100000; i++) nanoid()
console.timeEnd('nanoid (x100,000)')

console.time('nanoid (x1,000,000)')
for (let i = 0; i < 1000000; i++) nanoid()
console.timeEnd('nanoid (x1,000,000)')
