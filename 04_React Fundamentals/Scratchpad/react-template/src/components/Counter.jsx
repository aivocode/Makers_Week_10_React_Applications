import { useState } from "react";
import CountDisplay from "./CountDisplay";
import CountButton from "./CountButton";

const Counter = () => {
  const [state, setState] = useState(0);

  return (
    <div>
      <CountDisplay state={state} />
      <CountButton setState={setState} state={state} />
    </div>
  );
};

export default Counter;