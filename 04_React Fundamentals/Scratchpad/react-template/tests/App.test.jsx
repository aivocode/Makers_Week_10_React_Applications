import { screen, render } from "@testing-library/react";
import App from "../src/App.jsx";

test("renders with the correct name", () => {
  render(<App />);
  expect(screen.getByTestId("_name")).toHaveTextContent("Doge");
});

test("renders with the correct job and birthdate", () => {
  render(<App />);
  expect(screen.getByTestId("_job")).toHaveTextContent("Nuclear Physicist");
  expect(screen.getByTestId("_birthdate")).toHaveTextContent("2000");
});
