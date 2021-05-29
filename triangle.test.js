const func = require('./routes/triangle');

test('adds 2 + 2 + 3 is triangle isosceles', () => {
    expect(func.triangle_checker(2,2,3)).toMatch('Isosceles');
});


