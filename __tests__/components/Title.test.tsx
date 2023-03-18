import React from "react";
import { render, screen } from "@testing-library/react";
import Title from "components/Title";

describe("Title", () => {
  it("可以正确渲染大字", () => {
    const { baseElement, getByText } = render(
      <Title type="large" title="大字" />
    );
    // expect(baseElement).toMatchSnapshot();
    expect(screen.getByText("大字")).toMatchInlineSnapshot(`
      <div>
        大字
      </div>
    `);
  });

  it("可以正确渲染小字", () => {
    const { baseElement, getByText } = render(
      <Title type="small" title="小字" />
    );
    // expect(baseElement).toMatchSnapshot();
    const content = screen.getByText("小字");
    expect(content).toMatchInlineSnapshot(`
      <div>
        小字
      </div>
    `);
  });
});
