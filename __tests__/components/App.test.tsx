import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "../../src/App";

test("should render learn react", () => {
  render(<App />);

  const linkElement = screen.getByText(/learn react/i);

  expect(linkElement).toBeInTheDocument();
});

test("should show full name when type", async () => {
  const name = "John Doe";
  const user = userEvent.setup();

  render(<App />);

  const inputElement: HTMLInputElement = screen.queryByPlaceholderText(
    "Type your name"
  ) as HTMLInputElement;

  // 2023年3月18日18:56:18 已经修改成这样了。
  await user.type(inputElement, name);

  expect(screen.getByText(name)).toBeInTheDocument();
});

test("should display name from api directly", async () => {
  render(<App />);

  const text = await screen.findByText(/Oskari Wirtanen/gi);
  // const text = await screen.findByText(/Oskari/gi);

  expect(text).toBeInTheDocument();
});
