const Recipe = (props) => {
    return (
      <>
        <h1 id="title" data-testid="_title">
          {props.title}
        </h1>

        <p id="type" data-testid="_type">{props.type}</p>
        <p id="duration" data-testid="_duration">{props.duration}</p>
      </>
    );
  };

  export default Recipe;
