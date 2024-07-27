const Profile = (props) => {
  return (
    <>
      <h1 id="name" data-testid="_name">
        {props.name}
      </h1>

      <p id="job" data-testid="_job">{props.job}</p>
      <p id="birthdate" data-testid="_birthdate">{props.birthdate}</p>
    </>
  );
};

export default Profile;
