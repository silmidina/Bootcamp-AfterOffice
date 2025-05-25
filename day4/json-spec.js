import json from './data.json' assert { type: 'json' };

// console.log(data);

let data = JSON.stringify(json);
let dataBaru = JSON.parse(data);
// console.log(data);

// console.log('typeof json');
// console.log(typeof json);
// console.log('typeof data');
// console.log(typeof data);
// console.log('typeof dataBaru');
// console.log(typeof dataBaru);

// dapat respon dari API dalam bentuk string
// kita ubah ke object
// kita handle datanya
// kita balikin ke string
// kirim request ke API

// let a = json;
// let a = { ...json };
let a = JSON.parse(JSON.stringify(json));
a.email = 'emailBaru@gmail.com';
a.userData.nama = 'dina'
console.log(a);
console.log(json);

