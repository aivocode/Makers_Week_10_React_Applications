const CountButton = (props) => {
  const incrementCounter = () => {
    props.setState(props.state + 1);
  };
  const decrementCounter = () => {
    props.setState(props.state - 1);
  };

  return (
    <div>
      <button onClick={incrementCounter}>Increment</button>
      <button onClick={decrementCounter}>Decrement</button>
    </div>
  );
};

export default CountButton;
