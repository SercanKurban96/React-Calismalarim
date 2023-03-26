// const users = ["Sercan", "Elif", "Ahmet"];
const users = [
  {
    name: "Sercan",
    age: 27,
  },
  {
    name: "Elif",
    age: 27,
  },
  {
    name: "Ahmet",
    age: 28,
  },
  {
    name: "Yeliz",
    age: 20,
  },
];

/*
push
map
find
filter
some
every
includes
*/
//push
// users.push("Yusuf");
// users.push("Fatma");
// console.log(users);

//map
// users.map((item) => {
//   console.log(item);
// });

// users.map((item) => {
//   console.log(item.name);
// });

//find
// const result = users.find((item) => item.name === "Sercan" && item.age > 25);
// console.log(result);

//filter
// const filtered = users.filter(({ name, age }) => name === "Sercan" && age < 30);
// console.log(filtered);

//some
// const some = users.some((item) => item.age === 27);
// console.log(some);

//every
// const every = users.every((item) => item.age > 25);
// console.log(every);

//includes
const fruits = ["apple", "pear", "banana"];
const isIncluded = fruits.includes("banana");
console.log(isIncluded);
