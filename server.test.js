const {app} = require('./server');
const st = require('supertest');

describe('Server test', () =>{
    let server;
    beforeAll(() =>{
        server = st(app);
    })

    it('Should return a 200 status and confirmation message on GET', async () =>{
        const response = await server.get('/ping');
        expect(response.status).toBe(200);
        expect(response.body.message).toBe('pong');
    });

    it('Should return a 201 status and confirmation message on POST', async () =>{
        const response = await server.post('/ping').send({message: 'data sent'})
        expect(response.status).toBe(201);
        expect(response.body.message).toBe('data created');
    })
})