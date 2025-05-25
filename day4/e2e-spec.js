// describe('e2e flow customer belanja', function () {
//   it('login', () => {
    
//   });

//   it('search', () => {
    
//   });

//   it('cart', () => {
    
//   });

//   it('checkout', () => {
    
//   });

//   it('orderData', () => {
    
//   });
//   // ngejalanin integration test
//   // ngejalanin e2e test
// })

import request from 'supertest';
import {expect} from 'chai';

// let url = 'https://restful-booker.herokuapp.com';
// let endpoint = '/booking'
// let body = {
//   "firstname": "Jim",
//   "lastname": "Brown",
//   "totalprice": 111,
//   "depositpaid": true,
//   "bookingdates": {
//     "checkin": "2025-05-24",
//     "checkout": "2026-05-24"
//   },
//   "additionalneeds": "Breakfast"
// }
// let header = {
//   'Content-Type': 'application/json',
//   'Accept': 'application/json'
// }

let bookingId

describe('coba e2e', function(){
  it('create booking', async function(){
    this.timeout(5000)
    const response = await request(url).post(endpoint).set(header).send(body);

    expect(response.statusCode).to.equal(200)
    expect(response.body.booking.firstname).to.equal(body.firstname)

    bookingId = await response.body.bookingid;
  });

  it('get booking', async function(){
    this.timeout(5000)
    let newEndpoint = `${endpoint}/${bookingId}`;
    const response = await request(url).get(newEndpoint).set(header)

    console.log(response.statusCode);
    console.log(response.body);
  })
})

// catatan untuk development
// pastikan codingan jalan terlebih dahulu
// responnya sudah benar
// rapih2, variablenya kalau sama disatuin
// kalau bisa dipisahkan file, pisah saja, data di taruh .json atau .env