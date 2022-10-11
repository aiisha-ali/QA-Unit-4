import { transformToNumber } from './nums'

it('should transform a string number to a number of type number', () => {
    const input = '1'
    const result = transformToNumber(input)
    expect(result).toBe('number')
})

it('should yield NaN for non-transformable values.', () => {
    let three = '3'
    let result = transformToNumber(three)
    expect(result).toBe(3)
})

it('should transform a string number to a number of type number', () => {
    const input = 'invalid'
    const input2 = {}
    let firstInput = transformToNumber(input)
    let secondInput = transformToNumber(input2)
    expect(firstInput).toBeNaN()
    expect(secondInput).toBeNaN()
})