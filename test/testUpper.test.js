const upper = require('../Functions/upper')

describe('Paso a Mayusculas', () => {
    test('hola mundo debe ser HOLA MUNDO', ()=>{
        const result = upper('hola mundo')
        expect(result).toBe('HOLA MUNDO')
    })
})