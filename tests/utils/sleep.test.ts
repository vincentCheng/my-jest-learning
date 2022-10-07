import sleep from "utils/sleep";

// 这个执行错误
// describe("sleep", () => {
//   beforeAll(() => {
//     jest.useFakeTimers();
//   });

//   it("可以睡眠 1000ms", async () => {
//     const callback = jest.fn();

//     const act = async () => {
//       await sleep(1000);
//       callback();
//     };

//     act();

//     // 快进时间之前检查callback是否被调用。
//     expect(callback).not.toHaveBeenCalled();

//     // 快进时间
//     jest.runAllTimers();

//     expect(callback).toHaveBeenCalledTimes(1);
//   });
// });

// 这里要确保jest的event loop和nodejs的一样。
describe("sleep 正确执行", () => {
  it("1s 后执行sleep", async () => {
    jest.useFakeTimers();

    const act = async (callback: () => void) => {
      await sleep(1000);
      callback();
    };

    const mockCallback = jest.fn();
    const promise = act(mockCallback);

    // mockCallback 还没有调用
    expect(mockCallback).not.toBeCalled();

    // 清空jest message queue中的settimeout中的resolve函数
    jest.runAllTimers();

    // 执行callback内容
    await promise;

    // mockCallback已经调用
    expect(mockCallback).toBeCalled();
    expect(mockCallback).toHaveBeenCalledTimes(1);
  });
});
