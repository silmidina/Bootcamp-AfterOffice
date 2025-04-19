const user = {
  name: "John Doe",
  age: 15,
  isStudent: true,
};
console.log(user.name);
console.log(user.age);

user.city = "New York"; //menambah property baru
user.age = 20; //mengubah property
delete user.isStudent; //menghapus property
console.log(user);

for (let key in user) {
  console.log(`${key}: ${user[key]}`);
}

const buah = ["apel", "jeruk", "mangga"];
console.log(buah[0]);

buah.push("pepaya");
buah.unshift("manggis");
console.log(buah);

buah.pop() //hapus terakhir
buah.shift() //hapus pertama
console.log(buah);

buah.forEach((buah, index) => {
  console.log(`${index}: ${buah}`);
});
console.log("----------------------------");
const user2 = [
  {
    name: "John Doe",
    age: 15,
  },
  {
    name: "Jane Smith",
    age: 20,
  },
  {
    name: "Alice Johnson",
    age: 25,
  },
];
user2.forEach((user2) => console.log(user2.name));
console.log("----------------------------");
const numbers = [10, 20, 30, 40, 50];
numbers.forEach((num, index) => {
  console.log(index * num);
});