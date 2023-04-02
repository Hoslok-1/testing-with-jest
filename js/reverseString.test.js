const reverseString = require('./reverseString');

test('Reversing a string',()=>{
    expect(reverseString('reversed?')).toBe('?desrever');
})