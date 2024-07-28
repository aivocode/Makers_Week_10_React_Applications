const ButtonListener = () => {
  const handleButton = (event) => {
    console.log(event);
  };

  return (
    <>
      <button onClick={handleButton}>Button Console Log</button>
    </>
  );
};

export default ButtonListener;
