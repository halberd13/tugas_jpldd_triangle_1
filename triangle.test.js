const func = require('./routes/triangle');


// Normal Test Case 
test('[NormalCase]  A = 7, B = 7, C = 7 => Equilateral', () => {
    expect(func.triangle_checker(7,7,7)).toMatch('Equilateral');
});

test('[NormalCase] A = 7, B = 7, C = 10 => Isosceles', () => {
    expect(func.triangle_checker(7,7,10)).toMatch('Isosceles');
});

test('[NormalCase]  A = 7, B = 10, C = 7 => Isosceles', () => {
    expect(func.triangle_checker(7,10,7)).toMatch('Isosceles');
});

test('[NormalCase] A = 10, B = 7, C = 7 => Isosceles', () => {
    expect(func.triangle_checker(10,7,7)).toMatch('Isosceles');
});

test('[NormalCase] A = 1.5, B = 2.5, C = 3 => Scalene', () => {
    expect(func.triangle_checker(1.5,2.5,3)).toMatch('Scalene');
});

test('[NormalCase] A = 4.5, B = 7, C = 4.5 => Isosceles', () => {
    expect(func.triangle_checker(4.5,7,4.5)).toMatch('Scalene');
});

test('[NormalCase] A = 7.8, B = 7.8, C = 7.8 => Equilateral', () => {
    expect(func.triangle_checker(7.8,7.8,7.8)).toMatch('Equilateral');
});

test('[NormalCase] A = 10.5, B = 4.9, C = 8.3 => Scalene', () => {
    expect(func.triangle_checker(10.5,4.9,8.3)).toMatch('Scalene');
});

test('[NormalCase] A = 27/5, B = 10, C = 27/5 => Isosceles', () => {
    expect(func.triangle_checker(27/5,10,27/5)).toMatch('Isosceles');
});

test('[NormalCase] A = 1/4, B = 0.25, C = 5/8 => Isosceles', () => {
    expect(func.triangle_checker(1/4,0.25,5/8)).toMatch('Isosceles');
});

//UPNORMAL TEST CASE
test('[AbnormalCase] A = 0, B = 7, C = 7 => Not a Triangle', () => {
    expect(func.triangle_checker(0,7,7)).toMatch('Not a Triangle');
});

test('[AbnormalCase] A = "T", B = "R", C = 10 => Not a Triangle', () => {
    expect(func.triangle_checker('T','R',10)).toMatch('Not a Triangle');
});

test('[AbnormalCase] A = -10, B = 9, C = 10 => Not a Triangle', () => {
    expect(func.triangle_checker(-10,9,10)).toMatch('Not a Triangle');
});

test('[AbnormalCase] A = "1/8", B = 10, C = 1/8 => Not a Triangle', () => {
    expect(func.triangle_checker('1/8',10,1/8)).toMatch('Not a Triangle');
});

// validation Chechk
test('[AbnormalCase] if a is not a number', () => {
    expect(func.triangle_checker('A',2,5)).toMatch('a should be a number');
});

test('[AbnormalCase] if b is not a number', () => {
    expect(func.triangle_checker(1,'B',5)).toMatch('b should be a number');
});

test('[AbnormalCase] if c is not a number', () => {
    expect(func.triangle_checker(1,2,'C')).toMatch('c should be a number');
});

test('[AbnormalCase] if a less than 0', () => {
    expect(func.triangle_checker(-1,1,1)).toMatch('a must greater then 0');
});

test('[AbnormalCase] if b less than 0', () => {
    expect(func.triangle_checker(1,-1,1)).toMatch('b must greater then 0');
});

test('[AbnormalCase] if c less than 0', () => {
    expect(func.triangle_checker(1,1,-1)).toMatch('c must greater then 0');
});

// TRIANGLE CHECK OF VALUE
test('if a + b <= c is not triangle', () => {
    expect(func.triangle_checker(2,2,5)).toMatch('Not a Triangle');
});

test('if a + c <= b is not triangle', () => {
    expect(func.triangle_checker(2,5,2)).toMatch('Not a Triangle');
});

test('if c + b <= a is not triangle', () => {
    expect(func.triangle_checker(5,2,2)).toMatch('Not a Triangle');
});