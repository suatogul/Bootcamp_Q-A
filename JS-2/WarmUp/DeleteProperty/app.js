/**
 * ? Write a function that returns a new object without provided properties.
 * * Use a plain object and properties as argumants
 * Expected Result: ({ a: 1, b: 2, c: 3 }, 'b') => { a: 1, c: 3 }
 */
import { without } from './function.js'
import { data } from './data.js'

without(data, 'b')

console.log(data)
