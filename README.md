# my-jest-learning

自己敲《jest 实战指南》

### userEvent 的写法已经更改

```js

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
```

### 输入完成之后按下回车键

```js
// 输入完成之后按下回车键
await user.type(inputElement, "{enter}");
await user.type(inputElement, "input some information!{enter}");
```

- 在 jest 中，`{enter}`是通识，这点要记住。
