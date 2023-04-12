import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Index from "components/TodoList";
import Item, { Status } from "components/TodoList/Item";

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

  test("should ignore empty input.", async () => {
    const user = userEvent.setup();
    const handleSubmit = jest.fn();

    render(<Index />);

    const inputElement: HTMLInputElement = screen.getByPlaceholderText(
      /What needs to be done\?/
    ) as HTMLInputElement;
    // 输入完成之后按下回车键
    await user.type(inputElement, "{enter}");

    expect(handleSubmit).not.toBeCalled();
  });

  test("should allow add to do when not empty input.", async () => {
    const user = userEvent.setup();
    // const handleSubmit = jest.fn();
    const text = "buy milk!";

    render(<Index />);

    const inputElement: HTMLInputElement = screen.getByPlaceholderText(
      /What needs to be done\?/
    ) as HTMLInputElement;
    // 输入完成之后按下回车键
    await user.type(inputElement, `${text}{enter}`);

    expect(screen.getByText("buy milk!")).toBeInTheDocument();
  });

  test("should todo-list add element", async () => {
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
    expect(screen.getAllByText(name)).toHaveLength(1);
  });

  test("should todo-list's status of item turn working to completed", async () => {
    const name = "John Doe";
    const user = userEvent.setup();
    const keyOfItem = "123";
    const toggleTodo = jest.fn();

    // const { keyOfItem, isCompleted, text, toggleTodo, removeTodo } = props;
    render(
      <Item
        keyOfItem={keyOfItem}
        isCompleted={false}
        text={name}
        toggleTodo={toggleTodo}
        removeTodo={jest.fn()}
      />
    );

    expect(screen.getByText(Status.WORING)).toBeInTheDocument();
    await user.click(screen.getByText(Status.WORING));
    expect(toggleTodo).toHaveBeenCalledTimes(1);

    render(
      <Item
        keyOfItem={keyOfItem}
        isCompleted={true}
        text={name}
        toggleTodo={toggleTodo}
        removeTodo={jest.fn()}
      />
    );

    /**
     * 注意使用这个函数
     */
    expect(screen.getByText(Status.COMPLETED)).toBeInTheDocument();
  });

  test("should todo-list's status of item turn completed to woring", async () => {
    const name = "John Doe";
    const user = userEvent.setup();
    const keyOfItem = "123";
    const toggleTodo = jest.fn();

    // const { keyOfItem, isCompleted, text, toggleTodo, removeTodo } = props;
    render(
      <Item
        keyOfItem="123"
        isCompleted={true}
        text={name}
        toggleTodo={toggleTodo}
        removeTodo={jest.fn()}
      />
    );

    expect(screen.getByText(Status.COMPLETED)).toBeInTheDocument();
    await user.click(screen.getByText(Status.COMPLETED));
    expect(toggleTodo).toHaveBeenCalledTimes(1);

    render(
      <Item
        keyOfItem={keyOfItem}
        isCompleted={false}
        text={name}
        toggleTodo={toggleTodo}
        removeTodo={jest.fn()}
      />
    );

    expect(screen.getByText(Status.WORING)).toBeInTheDocument();
  });
});
