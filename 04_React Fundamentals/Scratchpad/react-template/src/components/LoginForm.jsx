import { useState } from "react";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleUsername = (event) => {
    setUsername(event.target.value);
    console.log(username)
  };
  const handlePassword = (event) => {
    setPassword(event.target.value);
    console.log(password)
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(JSON.stringify({ username: username, password: password }))
    fetch("http://url.com/endpoint", {
      method: "POST",
      body: JSON.stringify({ username: username, password: password }),
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          Username:
          <input
            type="username"
            name="username"
            value={username}
            onChange={handleUsername}
          />
        </label>
      </div>

      <div>
        <label>
          Password:
          <input
            type="password"
            name="password"
            value={password}
            onChange={handlePassword}
          />
        </label>
      </div>

      <div>
        <label>
          Submit
          <input type="submit" name="submit" />
        </label>
      </div>
    </form>
  );
};

export default LoginForm;
