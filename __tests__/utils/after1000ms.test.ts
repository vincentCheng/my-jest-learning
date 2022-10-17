import after1000ms from "utils/after1000ms";

// 这种方法只能判断setTimeout能不能被调用，没法判断after1000ms有没有被调用。
describe("after1000ms 不推荐使用这种方法", () => {
  beforeAll(() => {
    jest.useFakeTimers();
  });

  it("可以在 1000ms 后自动执行函数", () => {
    // spy on 译为：监视
    jest.spyOn(globalThis, "setTimeout");

    after1000ms();

    expect(setTimeout).toHaveBeenCalledTimes(1);
    expect(setTimeout).toHaveBeenCalledWith(expect.any(Function), 1000);
  });
});

// 推荐使用这种方法
describe("after1000ms 推荐使用这种方法", () => {
  beforeAll(() => {
    jest.useFakeTimers();
  });

  it("可以在 1000ms 后自动执行函数", () => {
    jest.spyOn(globalThis, "setTimeout");
    // 创建一个虚假的函数
    const callback = jest.fn();

    expect(callback).not.toHaveBeenCalled();

    after1000ms(callback);

    // 快进时间
    jest.runAllTimers();

    // 虚假函数被执行
    expect(callback).toHaveBeenCalled();
    // setTimeout被执行了一次
    expect(setTimeout).toHaveBeenCalledTimes(1);
    // setTimeout在1秒之后被执行
    expect(setTimeout).toHaveBeenCalledWith(expect.any(Function), 1000);
  });
});
