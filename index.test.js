//add function
const add = require('./add')
//subtract function
const subtract = require('./subtract')
//multiply function
const multiply = require('./multiply')

//test to add 2 numbers together and the expected answer is 2
test('Adds 2 numbers', () => {
    expect(add(1,1)).toBe(2)
})
//test to subtract 2 numbers together and the expected answer is 0
test('subtracts 2 numbers', () => {
    expect(subtract(1,1)).toBe(0)
})
//test to multiply 2 numbers together and the expected answer is 1
test('multiplies 2 numbers', () => {
    expect(multiply(1,1)).toBe(1)
})

//test to divides 2 numbers together and the expected answer is 5
test('Divides 2 numbers', () => {
    expect(multiply(10,2)).toBe(5)
})