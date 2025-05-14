import { expect } from 'chai';
import request from 'supertest';

let statusCode = 200;
let failedStatusCode = 404;
let response = {
  body: 'asd',
  responseTime: 500
};

let method = 'get';
let url = 'https://fakestoreapi.com';
let endpoint = '/products';
let body = {
  "id": 0,
  "title": "string",
  "price": 0.1,
  "description": "string",
  "category": "string",
  "image": "http://example.com",
}

// let data = [
//   { 'id': '12345', 'response': 200 },
//   '12',
//   '121212121212121212'
// ]

describe('Test API Product', function () {
  context('Hit API GET Product', function () {
    it('success', async function () {
      const response = await request(url).get(endpoint);
      console.log(response.body);
      console.log(response.statusCode);
      expect(response.statusCode).to.eq(200);
      expect(response.body[0].id).to.eq(1);
      // console.log(statusCode);
      // expect(actual).to.eq(expected);
      // expect(statusCode).to.eq(200);
      // expect(response.body).to.contain('asd');
      // expect(response.responseTime).to.not.above(500);
    });

    it('failed', async function () {
      const response = await request(url).get(`${endpoint}s`);
      expect(response.statusCode).to.eq(404)
    });
  })

  context('Hit API CREATE Product', function () {
    for(let a = 0; a <= data.length; a++)
    it('success', async function () {
      const response = await request(url).post(endpoint).send(data[index]);
      expect(response.statusCode).to.eq(200);
      expect(response.body.title).to.eq(body.title);
    });

    it('gagal', async function () {
      // let wrongBody = { ...body};
      // wrongBody.title = 12345;
      let wrongBody = {
          "id": 0,
          "title": 12345,
          "price": 0.1,
          "description": "string",
          "category": "string",
          "image": "http://example.com",
      }

      const response = await request(url).post(endpoint).send(wrongBody);
      console.log(response.body);
      expect(response.statusCode).to.eq(400);
      // console.log(wrongBody);
      
    })
  })
})