// WIP

const request = require('supertest');
const server = require('./server.js');

describe('GET /', () => {
    it('should return 200 http status code', () => {
        return request(server)
            .get('/')
            .then(response => {
                expect(response.status).toBe(200);
            });
    });

    test('should return JSON', async () => {
        const response = await request(server).get('/');
        expect(response.type).toMatch('json');
    });

    test('should return { message: "Server up and running" }', async () => {
        const response = await request(server).get('/');
        expect(response.body).toEqual({ message: 'Server up and running' });
        expect(response.body.message).toBe('Server up and running');
    });
});