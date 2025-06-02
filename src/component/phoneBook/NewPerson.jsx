export const NewPerson = ({
  onSubmitClick,
  onNameChange,
  onNumberChange,
  pNewName,
  pNewNumber,
}) => {
  return (
    <>
      <form onSubmit={onSubmitClick}>
        Name:{" "}
        <input onChange={onNameChange} type="text" value={pNewName}></input>
        <br />
        Ph No:{" "}
        <input
          onChange={onNumberChange}
          type="number"
          value={pNewNumber}
        ></input>
        <button type="submit">add</button>
      </form>
    </>
  );
};
