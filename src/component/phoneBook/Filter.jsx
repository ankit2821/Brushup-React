export const Filter = ({ filteredValue, onNameSearch }) => {
  return (
    <>
      Filter Shown with:{" "}
      <input
        type="search"
        value={filteredValue}
        onChange={onNameSearch}
      ></input>
    </>
  );
};
