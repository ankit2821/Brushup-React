export const List = ({ finalSet }) => {
  return (
    <>
      {finalSet.map((person) => (
        <div key={person.Ph_No}>
          <span>{person.name}</span>
          <span>{person.Ph_No}</span>
        </div>
      ))}
    </>
  );
};
