// export const config = {
//   getEnv() {
//     // 很复杂的逻辑...
//     return "test";
//   },
// };

// 这样做，是为了让 spyOn 能够访问到configObj.env。
// export const configObj = {
//   get env() {
//     return "test";
//   },
// };

// 这又是另一种做法，注意 spyOn.test.ts 中的导入方法
// import * as envUtils from "utils/env";
// export const getEnv = () => {
//   return "test";
// };

// 第四种做法
// 需要使用Object.defineProperty()来定义
export const env = "test";
