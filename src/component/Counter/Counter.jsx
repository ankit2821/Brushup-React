import { useState } from "react";
import { Display } from "./Display";
import { Button } from "./Button";

export const Counter = () => {
  const [counter, setCounter] = useState(0);

  const handlePlus = () => {
    setCounter(counter + 1);
  };

  const handleMinus = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };
  const handleReset = () => {
    setCounter(0);
  };

  return (
    <>
      <Display counter={counter} />
      <Button onClick={handlePlus} text="Plus[+1]"></Button>
      <Button onClick={handleMinus} text="Minus[-1]"></Button>
      <Button onClick={handleReset} text="Reset"></Button>
    </>
  );
};
