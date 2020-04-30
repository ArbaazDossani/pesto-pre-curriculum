const {
    describe,
    it,
    expect,
    matchers 
} = require('./testFramework')

const {
    add,
    subtract,
    multiply,
    divide
} = require('./index')


describe('adder', () => {
    it('adds two numbers', () => {
        const result = add(1, 2)
        expect(result).toBe(3);
    })
});

describe('subtracter', () => {
    it('subtracts two numbers', () => {
        const result = subtract(4, 2)
        expect(result).toBe(2);
    })
});

describe('mulitplier', () => {
    it('multiplies two numbers', () => {
        const result = multiply(4, 2)
        expect(result).toBe(8);
    })
});

describe('divider', () => {
    it('divides two numbers', () => {
        const result = divide(4, 2)
        expect(result).toBe(2);
    })
});