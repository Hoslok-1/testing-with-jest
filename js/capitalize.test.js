const capitalize = require('./capitalize');

test('Capitalizes the first word in a string',()=>{
    expect(capitalize('wow')).toBe('Wow');
})