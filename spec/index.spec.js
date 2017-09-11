const lib = require('../index')

describe('index', () => {
    describe('zip', () => {
        it('is a function', () => {
            expect(lib.zip).toBeDefined()
        })
    })
    describe('xzip', () => {
        it('is a function', () => {
            expect(lib.xzip).toBeDefined()
        })
    })
})
