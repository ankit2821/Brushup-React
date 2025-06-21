import { useEffect } from "react";
import { useState } from "react";
import { Filter } from "./Filter";
import { List } from "./List";
import { NewPerson } from "./NewPerson";
import { Notification } from "./Notification";
import {
  createPerson,
  deletePerson,
  getAll,
  updatePerson,
} from "./services/persons";

export const PhoneBook = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filtered, setFilteredSet] = useState("");
  const [message, setMessage] = useState({
    text: "",
    type: "",
  });

  useEffect(() => {
    getAll().then((response) => {
      setPersons(response.data);
    });
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    const existingPerson = persons.find((person) => person.name === newName);

    if (existingPerson) {
      const confirmUpdate = window.confirm(
        `The person ${newName} already exist do you want to change the number?`
      );

      if (confirmUpdate) {
        const updatedPerson = { ...existingPerson, number: newNumber };
        updatePerson(existingPerson.id, updatedPerson)
          .then((response) => {
            setPersons(
              persons.map((p) =>
                p.id !== existingPerson.id ? p : response.data
              )
            );
            setMessage({
              text: `${newName} is updated successfully`,
              type: "success",
            });
            setTimeout(() => setMessage(null), 5000);
            setNewName("");
            setNewNumber("");
          })
          .catch((error) => {
            setMessage({
              text: `${newName} is already deleted from phone book`,
              type: "error",
            });
            setTimeout(
              () =>
                setMessage({
                  text: "",
                  type: "",
                }),
              5000
            );
            console.error("Update failed:", error);
          });
      }
    } else {
      const newObj = {
        name: newName,
        number: newNumber,
      };

      createPerson(newObj).then((response) => {
        setPersons(persons.concat(response.data));
        setMessage({
          text: `${newName} is added to the phoneBook`,
          type: "success",
        });
        setTimeout(() => {
          setMessage({ text: null, type: null });
        }, 5000);
        setNewName("");
        setNewNumber("");
      });
    }
  };

  const handleNameChange = (event) => {
    setNewName(event.target.value);
    // console.log("in name change", persons);
  };

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value);
    // console.log("in name change", persons);
  };

  const onSearch = (event) => {
    setFilteredSet(event.target.value);
    // persons.filter(filtered);
  };

  const fileteredSet = persons.filter((person) =>
    person.name.toLowerCase().startsWith(filtered.toLocaleLowerCase())
  );

  const handleDeletePerson = (id, name) => {
    // console.log("handle delete:");
    window.confirm(`Do you want to delete ${name}?`);
    deletePerson(id).then(() =>
      setPersons((prev) => prev.filter((p) => p.id !== id))
    );
    setMessage({
      text: `${name} has been deleted successfully`,
      type: "delete",
    });
    setTimeout(() => {
      setMessage({ text: null, type: null });
    }, 5000);
    // setPersons((prev) => prev.filter((p) => p.id !== id));
  };

  return (
    <>
      <h2>Phonebook</h2>
      <Notification message={message} />

      <h3> Add a new member</h3>
      <NewPerson
        onNumberChange={handleNumberChange}
        onNameChange={handleNameChange}
        onSubmitClick={handleSubmit}
        pNewName={newName}
        pNewNumber={newNumber}
      />

      <h3>Search a member in the list</h3>
      <Filter onNameSearch={onSearch} filteredValue={filtered} />

      <h3>List of members</h3>
      <List finalSet={fileteredSet} onDeleteClick={handleDeletePerson} />
    </>
  );
};
