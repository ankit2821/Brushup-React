import { useState } from "react";
import { Statistic } from "./Statistic";
import { Button } from "./Button";

export const Feedback = () => {
  const [good, setGood] = useState(0);
  const [bad, setbad] = useState(0);
  const [neutral, setNeutral] = useState(0);

  const handleGood = () => {
    setGood(good + 1);
  };
  const handleBad = () => {
    setbad(bad + 1);
  };
  const handleNeutral = () => {
    setNeutral(neutral + 1);
  };
  // console.log("total:", good + bad + neutral);
  // console.log("good: ", good);
  // console.log("bad: ", bad);

  return (
    <>
      <h1>Cafe Feedback board</h1>
      <Button onClick={handleGood} text="Good"></Button>
      <Button onClick={handleBad} text="Bad"></Button>
      <Button onClick={handleNeutral} text="Neutral"></Button>

      <h2>Good: {good} </h2>
      <h2>Bad: {bad}</h2>
      <h2>Neutral: {neutral} </h2>
      <h1>Statistics</h1>
      {good > 0 || bad > 0 || neutral > 0 ? (
        <Statistic good={good} bad={bad} neutral={neutral} />
      ) : (
        <h4>NO data</h4>
      )}
    </>
  );
};
