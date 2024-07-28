import { useState } from "react";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");

  const handleUsername = (event) => {
    setUsername(event.target.value);
    console.log(username);
  };
  const handlePassword = (event) => {
    setPassword(event.target.value);
    console.log(password);
  };
  const handlePhone = (event) => {
    setPhone(event.target.value);
    console.log(phone);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(JSON.stringify({ username: username, password: password, phone: phone }));
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

      <PhoneInput
        placeholder="Enter phone number"
        value={phone}
        onChange={setPhone}
      />

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

// npm install react-phone-number-input --save
