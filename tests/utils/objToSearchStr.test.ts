import objectToSearchStr from "utils/objToSearchStr";

describe("objToSearchStr", () => {
  it("可以将对象转化成查询参数字符窜", () => {
    expect(
      objectToSearchStr({
        a: "1",
        b: "2",
      })
    ).toEqual("a=1&b=2");
  });
});
