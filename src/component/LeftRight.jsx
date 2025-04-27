import { useState } from "react";

export const LeftRight = () => {
  const [click, setClick] = useState({
    left: 0,
    right: 0,
  });
  const [all, setAll] = useState([]);
  const handleLeft = () => {
    // const newClick = {
    //   ...click,
    //   left: click.left + 1,
    // };
    // setClick(newClick);
    setClick({ ...click, left: click.left + 1 });
    setAll(all.concat("L"));
    // console.log("left: ", click.left);
  };

  const handleRight = () => {
    // const newClick = {
    //   ...click,
    //   right: click.right + 1,
    // };
    // setClick(newClick);
    setClick({ ...click, right: click.right + 1 });
    setAll(all.concat("R"));
    // console.log("right: ", click.right);
  };

  const handleReset = () => {
    setClick({ right: 0, left: 0 });
    setAll([]);
  };
  //   console.log("All: ", all);
  return (
    <>
      <h2>{all}</h2>
      <h1>{click.left}</h1>
      <button onClick={handleLeft}>Left</button>
      <button onClick={handleRight}>Right</button>
      <h1>{click.right}</h1>
      <button onClick={handleReset}>Reset</button>
    </>
  );
};
