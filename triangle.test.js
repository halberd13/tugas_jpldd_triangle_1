const func = require('./routes/triangle');


// Normal Test Case 
test('[NormalCase] 1. A = 7, B = 7, C = 7 => Equilateral', () => {
    expect(func.triangle_checker(7,7,7)).toMatch('Equilateral');
});

test('[NormalCase] 2. A = 7, B = 7, C = 10 => Isosceles', () => {
    expect(func.triangle_checker(7,7,10)).toMatch('Isosceles');
});

test('[NormalCase] 3. A = 7, B = 10, C = 7 => Isosceles', () => {
    expect(func.triangle_checker(7,10,7)).toMatch('Isosceles');
});

test('[NormalCase] 4. A = 10, B = 7, C = 7 => Isosceles', () => {
    expect(func.triangle_checker(10,7,7)).toMatch('Isosceles');
});

test('[NormalCase] 5. A = 1.5, B = 2.5, C = 3 => Scalene', () => {
    expect(func.triangle_checker(1.5,2.5,3)).toMatch('Scalene');
});

test('[NormalCase] 6. A = 4.5, B = 7, C = 4.5 => Isosceles', () => {
    expect(func.triangle_checker(4.5,7,4.5)).toMatch('Isosceles');
});

test('[NormalCase] 7. A = 7.8, B = 7.8, C = 7.8 => Equilateral', () => {
    expect(func.triangle_checker(7.8,7.8,7.8)).toMatch('Equilateral');
});

test('[NormalCase] 8. A = 10.5, B = 4.9, C = 8.3 => Scalene', () => {
    expect(func.triangle_checker(10.5,4.9,8.3)).toMatch('Scalene');
});

test('[NormalCase] 9. A = 27/5, B = 10, C = 27/5 => Isosceles', () => {
    expect(func.triangle_checker(27/5,10,27/5)).toMatch('Isosceles');
});



//UPNORMAL TEST CASE
test('[AbnormalCase] 1. A = 0, B = 7, C = 7 => "a":0 must greater than 0', () => {
    expect(func.triangle_checker(0,7,7)).toMatch('"a":0 must greater than 0');
});

test('[AbnormalCase] 2. A = "T", B = 10, C = 10 => "a":T must be a number', () => {
    expect(func.triangle_checker('T',10,10)).toMatch('"a":T must be a number');
});

test('[AbnormalCase] 3. A = -10, B = 9, C = 10 => "a":-10 must greater than 0', () => {
    expect(func.triangle_checker(-10,9,10)).toMatch('"a":-10 must greater than 0');
});

test('[AbnormalCase] 4. A = "1/8", B = 10, C = 1/8 => "a":1/8 must be a number', () => {
    expect(func.triangle_checker('1/8',10,1/8)).toMatch('"a":1/8 must be a number');
});

test('[AbnormalCase] 5. A = 1/4, B = 0.25, C = 5/8 => Not a Triangle', () => {
    expect(func.triangle_checker(1/4,0.25,5/8)).toMatch('Not a Triangle');
});


// // validation Check
// test('[AbnormalCase] 5. if a is not a number', () => {
//     expect(func.triangle_checker('A',2,5)).toMatch('"a" must be a number');
// });

// test('[AbnormalCase] 6. if b is not a number', () => {
//     expect(func.triangle_checker(1,'B',5)).toMatch('"b" must be a number');
// });

// test('[AbnormalCase] 7. if c is not a number', () => {
//     expect(func.triangle_checker(1,2,'C')).toMatch('"c" must be a number');
// });

// test('[AbnormalCase] 8. if a less than 0', () => {
//     expect(func.triangle_checker(-1,1,1)).toMatch('"a" must greater then 0');
// });

// test('[AbnormalCase] 9. if b less than 0', () => {
//     expect(func.triangle_checker(1,-1,1)).toMatch('"b" must greater then 0');
// });

// test('[AbnormalCase] 10. if c less than 0', () => {
//     expect(func.triangle_checker(1,1,-1)).toMatch('"c" must greater then 0');
// });

// TRIANGLE CHECK OF VALUE
// test('[AbnormalCase] 11. if a + b <= c is not triangle', () => {
//     expect(func.triangle_checker(2,2,5)).toMatch('Not a Triangle');
// });

// test('[AbnormalCase] 12. if a + c <= b is not triangle', () => {
//     expect(func.triangle_checker(2,5,2)).toMatch('Not a Triangle');
// });

// test('[AbnormalCase] 13. if c + b <= a is not triangle', () => {
//     expect(func.triangle_checker(5,2,2)).toMatch('Not a Triangle');
// });