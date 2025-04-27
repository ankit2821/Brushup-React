export const Notes = ({ notes }) => {
  //   const { notes } = props;
  //   console.log(notes);
  return (
    <>
      <h1>Notes</h1>
      <ul>
        {notes.map((note) => (
          <li key={note.id}>{note.content}</li>
        ))}
      </ul>
    </>
  );
};
