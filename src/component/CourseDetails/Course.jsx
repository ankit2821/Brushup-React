import { Parts } from "./Parts";

export const Course = ({ course }) => {
  //   console.log(course);
  return (
    <>
      <h1>{course.name}</h1>
      <Parts parts={course.parts} />
    </>
  );
};
