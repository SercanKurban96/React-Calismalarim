// import logo from "./logo.svg";
import "./App.css";
// import Header from "./components/Header";
import User from "./components/User";

// const name = "Sercan";
// const surname = "Kurban";
// const isLoggedIn = true;

// const friends = ["Elif", "Ahmet", "Yusuf", "Yeliz", "Leyla"];
const friends = [
  { id: 1, name: "Elif" },
  { id: 2, name: "Ahmet" },
  { id: 3, name: "Yusuf" },
  { id: 4, name: "Yeliz" },
  { id: 5, name: "Leyla" },
];
function App() {
  return (
    <>
      {/* <h1>Hello React</h1> */}
      {/* <Header /> */}
      {/* <h1>{isLoggedIn && `Benim adım ${name}, soyadım ${surname}`}</h1>
      {!isLoggedIn && "Giriş yapmadınız."} */}
      {/* Kısa yolu */}
      {/* <h1>
        {isLoggedIn
          ? `Benim adım ${name}, soyadım ${surname}`
          : "Giriş yapmadınız."}
      </h1> */}

      {/* <User name="Sercan" surname="Kurban" age={27} isLoggedIn={true} /> */}

      {/* Döngülerde "key" prop'u */}
      <User
        name="Sercan"
        surname="Kurban"
        isLoggedIn={true}
        age={27}
        friends={friends}
        address={{
          title: "Ümraniye/İstanbul",
          zip: 34767,
        }}
      />
    </>
  );
}
export default App;
