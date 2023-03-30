import { useState } from "react";

function InputExample() {
  const [name, setName] = useState("Sercan");
  const [surname, setSurname] = useState("Kurban");

  const onChangeName = (event) => setName(event.target.value);
  const onChangeSurname = (event) => setSurname(event.target.value);

  return (
    <div>
      Name
      <br />
      <input value={name} onChange={onChangeName} />
      <br />
      Surname
      <br />
      <input value={surname} onChange={onChangeSurname} />
      <br />
      <br />
      {name} {surname}
    </div>
  );
}

export default InputExample;
