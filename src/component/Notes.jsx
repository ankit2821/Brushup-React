import { useState } from "react";

export const Notes = (props) => {
  //   const { notes } = props;
  //   console.log(notes);
  const [notes, setNote] = useState(props.notes);
  const [newNote, setNewNote] = useState("add new note");
  const [showAll, setShowAll] = useState(true);

  const addNote = (event) => {
    event.preventDefault();
    const newObj = {
      id: Number(notes.length + 1),
      content: newNote,
      important: Math.random() < 0.5,
    };
    // console.log(newObj);
    setNote(notes.concat(newObj));
    // console.log(notes);
    setNewNote("");
  };

  const handleNoteChange = (event) => {
    // console.log(event.target.value);
    setNewNote(event.target.value);
  };
  //   console.log(notes);

  const notesToShow = showAll
    ? notes
    : notes.filter((note) => {
        console.log(note);
        return note.important;
      });
  return (
    <>
      <h1>Notes</h1>
      <ul>
        {notesToShow.map((note) => (
          <li key={note.id}>{note.content}</li>
        ))}
      </ul>
      <button onClick={() => setShowAll(!showAll)}>
        Show{showAll ? "important" : "All"}
      </button>
      <form onSubmit={addNote}>
        <input onChange={handleNoteChange} type="text"></input>
        <button type="submit">Add note</button>
      </form>
    </>
  );
};
