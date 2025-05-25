import request from 'supertest';

describe('coba header', async function () {
  it('login APIcheap', async function () {
    let header = {
      'x-access-token': '321d6a221f8926b5ec41ae89a3b2ae7b'
    }

    let parameter = {
      'origin': 'MOW',
      'destination': 'HKT',
      'depart_date': '2025-04',
      'return_date': '2025-05',
      'page': '1',
      'currency': 'RUB'
    }

    let id = [123, 124, 125]
  
    let url = 'https://api.travelpayouts.com';
    let endpoint = '/v1/prices/cheap';

    // let newEndpoint = `${endpoint}/${id[0]}`
    // console.log(`${url}${newEndpoint}`);

    const response = await request(url).get(endpoint).set(header).query(parameter);
    console.log(response.body);
  });
})