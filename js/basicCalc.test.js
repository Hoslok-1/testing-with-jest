const basicCalc = require('./basicCalc')

test('A basic calculator', ()=>{
    expect(basicCalc.add(5,1)).toBe(6);
    expect(basicCalc.divide(10,5)).toBe(2);
    expect(basicCalc.multiply(10,5)).toBe(50);
    expect(basicCalc.subtract(10,100)).toBe(90);
})