'use strict';

const app = require('./../app');
const { expect } = require('chai');
const request = require('supertest');

describe('Test GET records /api/v1/records', () => {

    it('input as body', async () => {
        const res = await request(app).post('/api/v1/records').send({});
        expect(res.statusCode).to.equal(500);
        expect(res.body).to.have.own.property('msg');
        expect(res.body).to.have.own.property('code');
    });

});

