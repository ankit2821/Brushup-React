export const List = ({ finalSet, onDeleteClick }) => {
  // console.log("props", props);
  return (
    <>
      {finalSet.map((person) => (
        <div key={person.id}>
          <span>{person.name}</span>
          <span>{person.number}</span>
          <button onClick={() => onDeleteClick(person.id, person.name)}>
            Delete
          </button>
        </div>
      ))}
    </>
  );
};
