import "jest-location-mock";
// 能够关闭各种log信息
import mockConsole from "jest-mock-console";
mockConsole();

// Object.defineProperty(globalThis, "localStorage", {
//   value: {
//     store: {} as Record<string, string>,
//     setItem(key: string, value: string) {
//       this.store[key] = value;
//     },
//     getItem(key: string) {
//       return this.store[key];
//     },
//     removeItem(key: string) {
//       delete this.store[key];
//     },
//     clear() {
//       this.store = {};
//     },
//   },
//   configurable: true,
// });
