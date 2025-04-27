import "./App.css";
import { Anecdote } from "./component/anecdote/anecdote";
import { Counter } from "./component/Counter/Counter";
import { Course } from "./component/CourseDetails/Course";
import { Feedback } from "./component/Feedback/FeedBack";
import { LeftRight } from "./component/LeftRight";
import { Notes } from "./component/Notes";

function App() {
  const course = {
    name: "Half Stack application development",
    parts: [
      {
        id: 1,
        name: "Fundamentals of React",
        exercises: 10,
      },
      {
        id: 2,
        name: "Using props to pass data",
        exercises: 7,
      },
      {
        id: 3,
        name: "State of a component",
        exercises: 14,
      },
      {
        id: 4,
        name: "State of a component",
        exercises: 14,
      },
      {
        id: 5,
        name: "State of a component",
        exercises: 14,
      },
    ],
  };

  const notes = [
    {
      id: 1,
      content: "HTML is easy",
      important: true,
    },
    {
      id: 2,
      content: "Browser can execute only JavaScript",
      important: false,
    },
    {
      id: 3,
      content: "GET and POST are the most important methods of HTTP protocol",
      important: true,
    },
  ];
  return (
    <>
      {/* <Header course={course} />
      <Content parts={parts} />
      <Total parts={parts} /> */}
      {/* <Counter /> */}
      {/* <LeftRight /> */}
      {/* <Feedback /> */}
      {/* <Anecdote /> */}

      {/* <Notes notes={notes} /> */}
      <Course course={course} />
    </>
  );
}

export default App;
