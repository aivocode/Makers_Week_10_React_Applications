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

test("renders Recipe", () => {
  render(<App />);
  expect(screen.getByTestId("_title")).toHaveTextContent("Finnish cinnamon buns");
  expect(screen.getByTestId("_type")).toHaveTextContent("dessert");
  expect(screen.getByTestId("_duration")).toHaveTextContent(60);
});

{/* <Recipe title="Finnish cinnamon buns" type="dessert" duration={60} /> */}