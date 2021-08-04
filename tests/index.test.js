'use strict';

const app = require('./../app');
const { expect } = require('chai');
const request = require('supertest');

const body = {
    'startDate': '2017-01-28T01:22:14.398Z',
    'endDate': '2017-03-28T03:22:14.398Z',
    'minCount': 100,
    'maxCount': 350
};
describe('Test GET records /api/v1/records', () => {

    it('input as body', async () => {
        const res = await request(app).post('/api/v1/records').send(body);
        expect(res.statusCode).to.equal(200);
        expect(res.body).to.have.own.property('msg');
        expect(res.body).to.have.own.property('code');
        expect(res.body).to.have.own.property('records');

        for (const obj of res.body.records) {
            expect(new Date(obj.createdAt)).greaterThanOrEqual(new Date(body.startDate));
            expect(new Date(obj.createdAt)).lessThanOrEqual(new Date(body.endDate));
            expect(obj.totalCount).greaterThanOrEqual(body.minCount);
            expect(obj.totalCount).lessThanOrEqual(body.maxCount);
        }
    });

    it('input no body', async () => {
        const res = await request(app).post('/api/v1/records').send({});
        expect(res.statusCode).to.equal(400);
        expect(res.body).to.have.own.property('msg');
        expect(res.body).to.have.own.property('code');
    });
});

