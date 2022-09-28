
const add = require('./add')
const subtract = require('./subtract')
const multiply = require('./multiply')

test('Adds 2 numbers', () => {
    expect(add(1,1)).toBe(2)
})

test('subtracts 2 numbers', () => {
    expect(subtract(1,1)).toBe(0)
})

test('multiplies 2 numbers', () => {
    expect(multiply(1,1)).toBe(1)
})