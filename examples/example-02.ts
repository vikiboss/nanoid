import { customAlphabet } from '../src/index.ts'

const alphabet = '1234567890abcdef'
const idLength = 16

class User {
  id: string
  name: string
  email?: string
  constructor(name: string, email?: string) {
    this.id = customAlphabet(alphabet, idLength)()
    this.name = name
    this.email = email
  }
}

const me = new User('Viki')

console.log(`${me.name}'s id is ${me.id}`)
