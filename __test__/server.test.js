const app = require('../src/server/server')
const supertest = require('supertest')

const request = supertest(app)

describe('Test express server', () => {
    it('Get route test', async done => {
        const res = await request.get('/test')
        expect(res.status).toBe(200)
        expect(res.body.message).toBe('pass!')
        done()
    })
})