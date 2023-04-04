import { useState, useEffect } from "react";

import "./styles.css";

import List from "./List";
import Form from "./Form";

function Contacts() {
  const [contacts, setContacts] = useState([
    {
      fullname: "Sercan",
      phone_number: 123123,
    },
    {
      fullname: "Nilgün",
      phone_number: 123456,
    },
    {
      fullname: "Tomris",
      phone_number: 654321,
    },
  ]);

  useEffect(() => {
    console.log(contacts);
  }, [contacts]);

  return (
    <div id="container">
      <h1>Contacts</h1>
      <List contacts={contacts} />
      <Form addContact={setContacts} contacts={contacts} />
    </div>
  );
}

export default Contacts;
