import { useState, useEffect } from "react";

import ContactForm from "./components/ContactForm/ContactForm";
import ContactList from "./components/ContactList/ContactList";
import SearchBox from "./components/SearchBox/SearchBox";

const initialContact = [
  { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
  { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
  { id: "id-3", name: "Eden Clements", number: "645-17-79" },
  { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
];

const localStorageContacts = () => {
  const contactsList = localStorage.getItem("contacts");

  if (contactsList !== null) {
    return JSON.parse(contactsList);
  }

  return initialContact;
};

export default function App() {
  const [contacts, setContacts] = useState(localStorageContacts);
  const [search, setSearch] = useState("");

  const addContact = (newContact) => {
    setContacts((prevContact) => {
      return [...prevContact, newContact];
    });
  };

  const deleteContact = (contactId) => {
    setContacts((prevContact) => {
      return prevContact.filter((contact) => contact.id !== contactId);
    });
  };

  const filteredContact = contacts.filter((contact) =>
    contact.name.toLocaleLowerCase().includes(search.toLocaleLowerCase())
  );

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm addContact={addContact} />
      <SearchBox value={search} onFilter={setSearch} />
      <ContactList contacts={filteredContact} onDelete={deleteContact} />
    </div>
  );
}
