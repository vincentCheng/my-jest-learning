import useCounter from "hooks/useCounter";
import { act, render } from "@testing-library/react";
import React from "react";

/**
 * 由于TestComponent.test.tsx 中使用了<button/>，并不好用。
 * 这直接测试 useCounter 中的方法
 */
const setup = (initialNumber: number) => {
  const returnVal = {};

  const UseCounterTest = () => {
    const [counter, utils] = useCounter(initialNumber);

    // 将可枚举的属性复制到目标对象 returnVal 中
    Object.assign(returnVal, {
      counter,
      utils,
    });

    return null;
  };

  render(<UseCounterTest />);

  return returnVal;
};

describe("useCounter", () => {
  it("可以做加法", async () => {
    const useCounterData: any = setup(0);

    act(() => {
      useCounterData.utils.inc(1);
    });

    expect(useCounterData.counter).toEqual(1);
  });

  it("可以做减法", async () => {
    const useCounterData: any = setup(0);

    act(() => {
      useCounterData.utils.dec(1);
    });

    expect(useCounterData.counter).toEqual(-1);
  });

  it("可以设置值", async () => {
    const useCounterData: any = setup(0);

    act(() => {
      useCounterData.utils.set(10);
    });

    expect(useCounterData.counter).toEqual(10);
  });

  it("可以重置值", async () => {
    const useCounterData: any = setup(0);

    act(() => {
      useCounterData.utils.inc(1);
      useCounterData.utils.reset();
    });

    expect(useCounterData.counter).toEqual(0);
  });
});
