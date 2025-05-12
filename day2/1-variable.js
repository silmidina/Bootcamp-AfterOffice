//console.log('123');

//constant -> tidak bisa diubah
const a = 1
// satu = 2
// console.log(satu);

// var let -> bisa diubah
let b = 2
b = 3
b = 4
// console.log(b);

// string
let string1 =  'text' //bis pakai ' " `
let string2 = "test 'lagi'"
// let string2 = "test '${lagi}'"
let string3 = `test ${string2}`

let string4 = string1 + ' ' + string2
// console.log(string4); 

// integer
let integer1 = 901231231239
// console.log(integer1)

// boolean
let boolean1 = true
let boolean2 = false
let boolean3 = 5 == 3;
let boolean4 = 5 == 5;

// console.log(boolean4);

// array
let array = ['1', '2', '3', '4']; //untuk index, start di 0... secara penggunaan untuk pakai data seragam
// console.log(array[0])

// object
// let object = {
//   buah: 'apel', //key: data
//   'jumlah-buah': 3,
//   isEdible: true
// };

// let Object = {}
// console.log(object.'jumlah-buah') //variable.key
// console.log(object['jumlah-buah']) //variable['key']

// let camelCase = jumlahBuah;
// let snake_case = jumlah_buah;

let objectArray = {
  nomorUrut: [1, 2, 3, 4],
  nomorPeserta: ['a', 'b', 'c', 'd']
}
console.log(objectArray.nomorUrut[3]);

let arrrayObject = [
  {
    nama: 'budi',
    kelas: '2a',
  },
  {
    nama: 'cici',
    kelas: '2b',
  }
]
console.log(arrrayObject[0].nama);

/*

untuk declare ada 3, let, var, const,
untuk tipe data 5, string, integer, boolean, array, object

*/