const func = require('./routes/triangle');

test('adds 2 + 2 + 3 is triangle isosceles', () => {
    expect(func.triangle_checker(2,2,3)).toMatch('Isosceles');
});

test('if a + b <= c is not triangle', () => {
    expect(func.triangle_checker(2,2,5)).toMatch('Not Triangle');
});

test('if a + c <= b is not triangle', () => {
    expect(func.triangle_checker(2,5,2)).toMatch('Not Triangle');
});

test('if c + b <= a is not triangle', () => {
    expect(func.triangle_checker(5,2,2)).toMatch('Not Triangle');
});
