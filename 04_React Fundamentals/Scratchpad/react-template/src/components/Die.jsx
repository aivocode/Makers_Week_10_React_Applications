import { useState } from "react";

const Die = () => {
  const [state, setState] = useState("No Die was rolled yet");

  const getRandomInteger = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  };

  const handleDie = () => {
    setState("New Die roll: " + getRandomInteger(1, 6));
  };

  return (
    <>
      <h1>{state}</h1>
      <button onClick={handleDie}>Roll Die</button>
    </>
  );
};

export default Die;
