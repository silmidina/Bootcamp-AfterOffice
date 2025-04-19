//isi function dengan parameter default
function sapa1(nama1) {
  return `Halo, ${nama1}`;
}
console.log(sapa1());

//isi function dengan parameter default
function sapa(nama = "Tamu") {
  return `Halo, ${nama}`;
}
console.log(sapa());
console.log(sapa("Bob"));

function kuadrat(angka) {
  // return angka * angka;
}
console.log(kuadrat(5));

function proses(angka, callback) {
  return callback(angka)
}

function ganda(n) {
  return n * 2;
}
console.log(proses(4, ganda));
