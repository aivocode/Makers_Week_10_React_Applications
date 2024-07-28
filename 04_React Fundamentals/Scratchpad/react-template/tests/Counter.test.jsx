import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Counter from "../src/components/Counter";

test("renders with initial value of 0 ", () => {
  render(<Counter />);
  expect(screen.getByRole("heading")).toHaveTextContent("0");
});

test("renders with a new value of 2 ", async () => {
  render(<Counter />);
  await userEvent.click(screen.getByText("Increment"));
  await userEvent.click(screen.getByText("Increment"));
  expect(screen.getByRole("heading")).toHaveTextContent("2");
});
