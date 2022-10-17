import React from "react";
import useQuery from "hooks/useQuery";
import { createMemoryHistory, InitialEntry } from "history";
import { render } from "@testing-library/react";
import { Router } from "react-router-dom";

const setup = (initialEntries: InitialEntry[]) => {
  // 这个函数用于 tests 或者 react native中
  const memoHistory = createMemoryHistory({
    initialEntries,
  });

  const returnVal = { query: new URLSearchParams() };

  const TestComponent = () => {
    const query = useQuery();

    Object.assign(returnVal, { query });

    return null;
  };

  // react router v6的写法
  render(
    <Router location={memoHistory.location} navigator={memoHistory}>
      <TestComponent />
    </Router>
  );

  // react router v5的写法
  //   render(
  //     <Router history={memoHistory}>
  //       <TestComponent />
  //     </Router>
  //   );

  return returnVal;
};

describe("userQuery", () => {
  it("可以获取参数", () => {
    const result = setup([{ pathname: "/home", search: "?id=123" }]);

    expect(result.query.get("id")).toEqual("123");
  });
});
