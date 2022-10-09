// import { config } from "utils/env";

// 这种做法适合控制对象
// import { configObj } from "utils/env";

// 如果 utils/env 导出的是 export const getEnv = ()=>"test"
// 那么这里使用 envUtils 相当于一个对象。
import * as envUtils from "utils/env";

// 这个方法之前的很多方法都不合适，这个方法是最合适的。详见参考文献。
// describe("spyOn config", () => {
//   it("开发环境", () => {
//     jest.spyOn(config, "getEnv").mockReturnValue("dev");

//     expect(config.getEnv()).toEqual("dev");
//   });

//   it("正式环境", () => {
//     jest.spyOn(config, "getEnv").mockReturnValue("prod");

//     expect(config.getEnv()).toEqual("prod");
//   });
// });

// 这种做法适合控制对象
// describe("configObj env getter", () => {
//   it("开发环境 控制对象", () => {
//     jest.spyOn(configObj, "env", "get").mockReturnValue("dev");

//     expect(configObj.env).toEqual("dev");
//   });

//   it("生产环境 控制对象", () => {
//     jest.spyOn(configObj, "env", "get").mockReturnValue("prod");

//     expect(configObj.env).toEqual("prod");
//   });
// });

// 如果 utils/env 导出的是 export const getEnv = ()=>"test"
// 那么这里使用 envUtils 相当于一个对象。
// describe("configObj getEnv", () => {
//   it("开发环境 控制对象 新方法", () => {
//     jest.spyOn(envUtils, "getEnv").mockReturnValue("dev");

//     expect(envUtils.getEnv).toEqual("dev");
//   });

//   it("生产环境 控制对象 新方法", () => {
//     jest.spyOn(envUtils, "getEnv").mockReturnValue("prod");

//     expect(envUtils.getEnv).toEqual("prod");
//   });
// });

// 第四种做法
const originEnv = envUtils.env;
describe("env", () => {
  // 每一步都重置为真正的环境
  afterEach(() => {
    Object.defineProperty(envUtils, "env", {
      value: originEnv,
      writable: true,
    });
  });

  it("开发环境", () => {
    // 但是在测试中就需要重新设置为需要的环境。
    // 为什么要这样?
    // 这种方法很容污染全局变量，没有其他更好的方法才使用。
    Object.defineProperty(envUtils, "env", {
      value: "dev",
      writable: true,
    });

    expect(envUtils.env).toEqual("dev");
  });

  it("正式环境", () => {
    Object.defineProperty(envUtils, "env", {
      value: "prod",
      writable: true,
    });

    expect(envUtils.env).toEqual("prod");
  });
});
