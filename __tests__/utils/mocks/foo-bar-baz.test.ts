// 这里最好写在import上面。
// 先使用jest设定好值之后再运行。
jest.mock("./foo-bar-baz", () => {
  const originalModule = jest.requireActual("./foo-bar-baz");

  // Mock 默认带出和foo的内容
  return {
    __esModule: true,
    ...originalModule,
    default: jest.fn(() => {
      "mocked baz";
    }),
    foo: "mocked foo",
  };
});

import defaultExport, { bar, foo } from "./foo-bar-baz";

test("should do a partial mock", () => {
  const defaultExportResult = defaultExport();

  expect(defaultExportResult).toBe("mocked baz");
  expect(defaultExport).toHaveBeenCalled();
  expect(foo).toBe("mocked foo");
  expect(bar()).toBe("bar");
});
