import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Index from "components/TodoList";

describe("Test todo-list component", () => {
  test("should render placeholder of input.", () => {
    render(<Index />);

    const linkElement = screen.getByPlaceholderText(/What needs to be done\?/);

    expect(linkElement).toBeInTheDocument();
  });

  test("should render submit button.", () => {
    render(<Index />);

    expect(screen.getByText(/行动起来/)).toBeInTheDocument();
  });

  test("should todo-list work", async () => {
    const name = "John Doe";
    const user = userEvent.setup();

    render(<Index />);

    const inputElement: HTMLInputElement = screen.queryByPlaceholderText(
      "What needs to be done?"
    ) as HTMLInputElement;

    const btnElement: HTMLButtonElement = screen.getByText(
      /行动起来/
    ) as HTMLButtonElement;

    // 2023年3月18日18:56:18 已经修改成这样了。
    await user.type(inputElement, name);
    await user.dblClick(btnElement);

    /**
     * 注意使用这个函数
     */
    expect(screen.getAllByText(name)).toHaveLength(2);
  });
});
