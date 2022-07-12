
const func = require('./index')

test('Number 1 Test - First Rule', () => {
    expect(func.ordinalSuffix(1)).toBe('1st')
})

test('Number 1001 Test - First Rule', () => {
    expect(func.ordinalSuffix(1001)).toBe('1001st')
})

test('Number 12 Test - Teenth Exceptions', () => {
    expect(func.ordinalSuffix(12)).toBe('12th')
})

test('Number 16 Test - Teenth Exceptions', () => {
    expect(func.ordinalSuffix(16)).toBe('16th')
})

test('Number 13 Test - Teenth Exceptions', () => {
    expect(func.ordinalSuffix(13)).toBe('13th')
})

test('Number 42 Test - Second Rule', () => {
    expect(func.ordinalSuffix(42)).toBe('42nd')
})

test('Number 62 Test - Second Rule', () => {
    expect(func.ordinalSuffix(62)).toBe('62nd')
})

test('Number 73 Test - Third Rule', () => {
    expect(func.ordinalSuffix(73)).toBe('73rd')
})

test('Number 3 Test - Third Rule', () => {
    expect(func.ordinalSuffix(3)).toBe('3rd')
})

test('Number 9 Test - Fifth Rule', () => {
    expect(func.ordinalSuffix(9)).toBe('9th')
})

test('Number 999 Test - Third Rule', () => {
    expect(func.ordinalSuffix(999)).toBe('999th')
})

test('Number 58 Test - Fifth Rule', () => {
    expect(func.ordinalSuffix(58)).toBe('58th')
})

