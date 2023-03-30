import { useState } from "react";

function App() {
  const [name, setName] = useState("Sercan");
  const [age, setAge] = useState(27);
  // Array States
  const [friends, setFriends] = useState(["Elif", "Leyla"]);
  // Object States
  const [address, setAddress] = useState({ title: "İstanbul", zip: 34767 });
  return (
    <div className="App">
      <h1>Merhaba {name}!</h1>
      <h2>{age}</h2>
      <button onClick={() => setName("Ahmet")}>Change name</button>
      <button onClick={() => setAge(28)}>Change age</button>

      <hr />
      <br />

      <h2>Friends</h2>
      {friends.map((friend, index) => (
        <div key={index}>{friend}</div>
      ))}
      <br />
      <button onClick={() => setFriends([...friends, "Yeliz"])}>
        Add new friend
      </button>

      <hr />
      <br />

      <h2>Address</h2>
      <div>
        {address.title} {address.zip}
      </div>
      <br />
      <button
        onClick={() => setAddress({ ...address, title: "Ankara", zip: 44444 })}
      >
        Change the address
      </button>
    </div>
  );
}

export default App;
