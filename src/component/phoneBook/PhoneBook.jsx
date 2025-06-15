import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { Filter } from "./Filter";
import { List } from "./List";
import { NewPerson } from "./NewPerson";

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
    axios.get("http://localhost:3001/persons").then((response) => {
      setPersons(response.data);
      // console.log(response.data);
    });
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (
      persons.some((obj) => {
        return obj.name === newName || obj.Ph_No === newNumber;
        // console.log(obj.name);
      })
    ) {
      // console.log(obj);
      alert(`${newName} or ${newNumber} already exist in the list`);
    } else {
      const newObj = {
        name: newName,
        Ph_No: newNumber,
      };
      setPersons(persons.concat(newObj));
    }

    setNewName("");
    setNewNumber("");
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
      <List finalSet={fileteredSet} />
    </>
  );
};
