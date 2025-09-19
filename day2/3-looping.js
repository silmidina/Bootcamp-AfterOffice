// if else
// jika a maka b
let a = 1;
if (a<5) {
  console.log('lulus'); //true
} else if (a == 5) {
  console.log('ngulang'); //true ==5
} else {
  console.log('tidak lulus'); //false
}

let buah = ['anggur', 'apel', 'sirsak', 'pisang']
let makanan = 'apel'
switch (buah[2]) {
  case 'anggur':
    console.log('ungu');
    break;
  case 'apel':
    console.log('merah');
    break;
  case 'sirsak':
    console.log('hijau');
    break;
  default:
    console.log('banyak warna');
    break;
}


// looping, for, while, do while
// for
let objectBaru = {
  name: 'a',
  class: 1,
}
for (let index = 0; index <6; index++){
  console.log(buah[index]);
}

//for in, for of
// for in, dipakai untuk object
for (const key in objectBaru) {
    console.log(`${key}: ${objectBaru[key]}`);
}

// for of, dipakai untuk array
for (let menuHariIni of buah) {
  console.log('menuHariIni');
  console.log(menuHariIni);
  
}

let index2 = 3
// while (index2 <= 2) {
//   console.log(`buah[${index2}]`);
//   console.log(buah[index2]);
//   index2++;
// }

do {
  console.log(`buah hari ini adalah ${buah[index2]}`);
  index2++;
} while (index2 <= 2);

//quiz 2
let usia = 1
if (usia <=18) {
  console.log('anak-anak');
} else {
  console.log('dewasa');
}

//function
// function umur({a,b,c,d}) {
// function umur(integer) {
  if (integer <=18) {
  console.log('anak-anak');
} else {
  console.log('dewasa');
  }
  // console.log(a);
  // console.log(b);
  // console.log(c);
  // console.log(d);

  return integer*2;
  // return 'bisa'
}

// komponen function = 3, namaFunction, variable

// umur(usia)
let quiz = umur({a,b,c,d})
quiz = umur(2)
console.log(quiz);

// console.log(umur(usia));
