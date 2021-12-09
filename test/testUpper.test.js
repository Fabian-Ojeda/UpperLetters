const upper = require('../Functions/upper')

describe('Paso a Mayusculas', () => {
    test('hola mundo debe ser HOLA MUNDO', ()=>{
        const result = upper('esto nos dara un error')
        expect(result).toBe('HOLA MUNDO')
    })
})