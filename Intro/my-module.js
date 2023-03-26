// function topla(a, b) {
//   return a + b;
// }

// const topla = (a, b) => {
//   return a + b;
// };

export default (name) => {
  //   console.log("Hello " + name);
  console.log(`Hello ${name}`);
};

const topla = (a, b) => a + b;
const cikar = (a, b) => a - b;

const text = "Text";
const user = {
  name: "Sercan",
  surname: "Kurban",
};
const users = [
  {
    name: "Ahmet",
    surname: "Karaca",
  },
  {
    name: "Yusuf",
    surname: "Kandemir",
  },
];

export { topla, cikar, text, user, users };

// export { hello, topla, cikar };
// export default topla;
