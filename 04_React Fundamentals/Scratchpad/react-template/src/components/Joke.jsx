import { useState, useEffect } from "react";

const Joke = (props) => {
  const [state, setState] = useState("");

  useEffect(() => {
    fetch("https://official-joke-api.appspot.com/random_joke")
      .then((response) => response.json())
      .then((data) => setState(data));
  }, []);

  return (
    <>
      <h2>Random Joke:</h2>
      <div>{state["setup"]}</div>
      <div>{state["punchline"]}</div>
    </>
  );
};

export default Joke;
