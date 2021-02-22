const mockTest = require('./mockTest');

test('adds 1 + 2 to equal 3', () => {
    expect(mockTest(1, 2)).toBe(3);
});