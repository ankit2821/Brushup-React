export const Parts = ({ parts }) => {
  //   console.log(parts);
  const total = parts.reduce((sum, part) => sum + part.exercises, 0);

  return (
    <>
      {parts.map((part) => (
        <h5 key={part.id}>{part.name + " has " + part.exercises}</h5>
      ))}
      {<h5>Total exercise: {total}</h5>}
    </>
  );
};
