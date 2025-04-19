console.log("hello world!");

var nama = "kiko";
var nama = "mimo";
console.log(nama);

if (true) {
  let namaDepan = "kiko";
  console.log(namaDepan) //menampilkan namaDepan
}
//console.log(namaDepan); //undefined

const pi = 3.14;
//pi = 3.123456;
//console.log(pi);

let nama123 = "kiko" //string
let number123 = 5 //number
let boolean = true //boolean
let float = 3.14 //float
console.log("----------------------------");
let a = 10;
let b = 3;
let c = "10"
console.log("a + b = ", a + b);
console.log("a - b = ", a - b);
console.log("a * b = ", a * b);
console.log("a / b = ", a / b);
console.log("a % b = ", a % b);
console.log("a ** b = ", a ** b);
console.log("----------------------------");
console.log("a == c = ", a == c); //true
console.log("a === c = ", a === c); //false
console.log("a != c = ", a != c); //false
console.log("a >= c = ", a >= c); //true
console.log("a <= c = ", a <= c); //false
console.log("----------------------------");
console.log("true && true =", true && true); //true
console.log("false && true =", false && true); //false
console.log("true || false =", true || false); //true
console.log("----------------------------");
console.log(!(5 < 3)); //true

console.log(typeof "Hello");
console.log(typeof 5);
console.log(typeof 5.5);
console.log(typeof true);
console.log(typeof number123);
console.log("----------------------------");

let isWeekend = true;
let isHoliday = false;
let canRelax = isWeekend || isHoliday && !false;
console.log("Can I relax?", canRelax);