const InputListener = () => {
  const handleInput = (event) => {
    console.log(event.target.value);
  };

  return (
    <>
      <br />
      <input type="text" onChange={handleInput}/>
    </>
  );
};

export default InputListener;
