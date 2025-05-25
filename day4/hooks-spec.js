import { describe } from 'mocha';
import request from 'supertest';

let token 

describe('testing hooks di mocha', function () {
  before(function () {
    console.log('before jalan disini');
    //bikin kodingan untuk getToken
    token = balikanApiLogin
  });

  after(function () {
    console.log('after disini');
    // kodingan untuk screenshot
    // let a = 1;
  });

  beforeEach(function () {
    console.log('jalanin beforeEach');
  })

  afterEach(function () {
    console.log('jalanin afterEach');
  })

  describe('describe 1', function () {
    it('it 1', function() {
      let a = 1;
    });
    it('it 2', function() {
      let a = 1;
    });
  })
})