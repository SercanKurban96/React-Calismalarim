// setTimeout(() => {
//   console.log("Merhaba");
// }, 2000);

// setInterval(() => {
//   console.log("Merhaba ben her saniye çalışacağım.");
// }, 1000);

// const sayHi = () => {
//   console.log("Merhaba");
// };
// sayHi();

// const sayHi = (cb) => {
//   cb();
// };

// sayHi(() => {
//   console.log("Hello");
// });

import fetch from "node-fetch";
// Users listesini görme
// fetch("https://jsonplaceholder.typicode.com/users")
//   .then((data) => data.json())
//   .then((users) => console.log(users));

// Users işlemlerde her bir id'ye ait postları görüntüleme
// fetch("https://jsonplaceholder.typicode.com/users")
//   .then((data) => data.json())
//   .then((users) => {
//     console.log("Users Yüklendi!", users);

//     fetch("https://jsonplaceholder.typicode.com/posts")
//       .then((data) => data.json())
//       .then((posts) => console.log("Postlar Yüklendi!", posts));
//   });

// Users işlemlerde 1. id'ye ait post görüntüleme
// fetch("https://jsonplaceholder.typicode.com/users")
//   .then((data) => data.json())
//   .then((users) => {
//     console.log("Users Yüklendi!", users);

//     fetch("https://jsonplaceholder.typicode.com/posts/1")
//       .then((data) => data.json())
//       .then((post) => console.log("Postlar Yüklendi!", post));
//   });

// Users işlemlerde 1. id'ye ait post görüntüleme (sırasız)
// fetch("https://jsonplaceholder.typicode.com/users")
//   .then((data) => data.json())
//   .then((users) => {
//     console.log("Users Yüklendi!", users);
//   });
// fetch("https://jsonplaceholder.typicode.com/posts/1")
//   .then((data) => data.json())
//   .then((post) => console.log("Postlar Yüklendi!", post));

// Users işlemlerde 1. id'ye ait 2 tane post görüntüleme
// fetch("https://jsonplaceholder.typicode.com/users")
//   .then((data) => data.json())
//   .then((users) => {
//     console.log("Users Yüklendi!", users);

//     fetch("https://jsonplaceholder.typicode.com/posts/1")
//       .then((data) => data.json())
//       .then((post) => {
//         console.log("Post 1 Yüklendi!", post);

//         fetch("https://jsonplaceholder.typicode.com/posts/2")
//           .then((data) => data.json())
//           .then((data) => console.log("Post 2 Yüklendi!", data));
//       });
//   });

// Users işlemlerde 1. id'ye ait 2 tane post görüntüleme FONKSİYONLU
// async function getData() {
//   const users = await (
//     await fetch("https://jsonplaceholder.typicode.com/users")
//   ).json();
//   const post1 = await (
//     await fetch("https://jsonplaceholder.typicode.com/posts/1")
//   ).json();

//   const post2 = await (
//     await fetch("https://jsonplaceholder.typicode.com/posts/1")
//   ).json();

//   console.log("users", users);
//   console.log("post1", post1);
//   console.log("post2", post2);
// }
// getData();

// Parametre kullanımı
// (async () => {
//   const users = await (
//     await fetch("https://jsonplaceholder.typicode.com/users")
//   ).json();
//   const post1 = await (
//     await fetch("https://jsonplaceholder.typicode.com/posts/1")
//   ).json();

//   const post2 = await (
//     await fetch("https://jsonplaceholder.typicode.com/posts/1")
//   ).json();

//   console.log("users", users);
//   console.log("post1", post1);
//   console.log("post2", post2);
// })();

import axios from "axios";
// (async () => {
//   const { data: users } = await axios(
//     "https://jsonplaceholder.typicode.com/users"
//   );

//   const { data: post1 } = await axios(
//     "https://jsonplaceholder.typicode.com/posts/1"
//   );

//   const { data: post2 } = await axios(
//     "https://jsonplaceholder.typicode.com/posts/2"
//   );

//   console.log("users", users);
//   console.log("post1", post1);
//   console.log("post2", post2);
// })();

// const getComments = () => {
//   return new Promise((resolve, reject) => {
//     // resolve("Comments");
//     resolve({ text: "Selam" });
//   });
// };
// getComments()
//   .then((data) => console.log(data))
//   .catch((e) => console.log(e));

// ŞARTLI BİR ÖRNEK
// const getComments = (number) => {
//   return new Promise((resolve, reject) => {
//     if (number === 1) {
//       // resolve("Comments");
//       resolve({ text: "Selam" });
//     }
//     reject("Bir problem oluştu!");
//   });
// };
// getComments(2)
//   .then((data) => console.log(data))
//   .catch((e) => console.log(e));

const getUsers = () => {
  return new Promise(async (resolve, reject) => {
    const { data } = await axios("https://jsonplaceholder.typicode.com/users");
    resolve(data);
    // reject("Bir sorun oluştu.");
  });
};

const getPost = (post_id) => {
  return new Promise(async (resolve, reject) => {
    const { data } = await axios(
      "https://jsonplaceholder.typicode.com/posts/" + post_id
    );
    resolve(data);
    // reject("Bir sorun daha oluştu.");
  });
};

// (async () => {
//   try {
//     const users = await getUsers();
//     const post = await getPost(1);

//     console.log(users);
//     console.log(post);
//   } catch (e) {
//     console.log(e);
//   }
// })();

Promise.all([getUsers(), getPost(1)])
  .then(console.log)
  .catch(console.log);
