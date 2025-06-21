import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { Filter } from "./Filter";
import { List } from "./List";
import { NewPerson } from "./NewPerson";
import {
  createPerson,
  deletePerson,
  getAll,
  updatePerson,
} from "./services/persons";

export const PhoneBook = () => {
  // const [persons, setPersons] = useState([
  //   { name: "Ankit Shriramwar", Ph_No: "7620870756" },
  //   { name: "Arto Hellas", Ph_No: "040-123456" },
  //   { name: "Ada Lovelace", Ph_No: "39-44-5323523" },
  //   { name: "Dan Abramov", Ph_No: "12-43-234345" },
  //   { name: "Mary Poppendieck", Ph_No: "39-23-6423122" },
  // ]);
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filtered, setFilteredSet] = useState("");

  useEffect(() => {
    getAll().then((response) => {
      setPersons(response.data);
      // console.log(response.data);
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
            setNewName("");
            setNewNumber("");
          })
          .catch((error) => {
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
        setNewName("");
        setNewNumber("");
      });
    }

    // console.log("in submit", persons);
  };

  // const debounce = (func, delay) => {
  //   let timer;
  //   return (...args) => {
  //     clearTimeout(timer);
  //     timer = setTimeout(() => {
  //       func.apply(args, this);
  //     }, delay);
  //   };
  // };

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
    // setPersons((prev) => prev.filter((p) => p.id !== id));
  };

  return (
    <>
      <h2>Phonebook</h2>

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
