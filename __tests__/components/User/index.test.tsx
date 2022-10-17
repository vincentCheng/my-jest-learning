import React from "react";
import server from "tests/mockServer/server";
import { rest } from "msw";
import render from "tests/testUtils/render";
import { fireEvent, screen } from "@testing-library/react";
import User from "components/User";

// 初始化 Http 请求
const setupHttp = (name?: string, age?: number) => {
  server.use(
    rest.get("http://mysite.com/api/users", async (req, res, ctx) => {
      return res(
        ctx.status(200),
        ctx.json({
          id: "1",
          name: name || "Jack",
          age: age || 18,
        })
      );
    })
  );
};

describe("User", () => {
  it("点击可以正确获取用户列表", async () => {
    setupHttp("Mary", 10);

    render(<User />, {
      preloadedState: {
        user: {
          id: "",
          name: "",
          age: 10,
          status: "",
        },
      },
    });

    /**
     * getBy 断言元素是否存在
     * findBy 异步逻辑之后获取元素
     * queryBy 上面两种情况都不满足，就用这个方法。
     */

    // 请求前
    expect(screen.getByText("无用户信息")).toBeInTheDocument();
    // 点击请求按钮
    fireEvent.click(screen.getByText("加载用户"));
    // 请求后
    expect(await screen.findByText("ID: 1")).toBeInTheDocument();
    expect(await screen.findByText("姓名: Mary")).toBeInTheDocument();
    expect(await screen.findByText("年龄: 10")).toBeInTheDocument();

    expect(screen.queryByText("加载中...")).not.toBeInTheDocument();
  });
});
