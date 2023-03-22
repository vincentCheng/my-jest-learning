# [参考文献 0：](https://github.com/haixiangyan/jest-tutorial)

# [参考文献 1：](https://www.bilibili.com/video/BV1Ad4y1C7vY/?spm_id_from=333.788&vd_source=59fab4ae7f7b6462cea577f55587fe78)

# 第 0.0 章-为什么要做单元测试？

- 瀑布流开发。随着开发迭代周期增加，风险也会增加。
- 敏捷开发所需。管控好，每个小的开发周期风险。

# 前端 jest 单元测试实战

# 前端组件化 UI 测试实战

# 前端状态管理数据流测试

# 前端单元测试该如何落地？

# 第 0.1 章-单元测试与自动化的关系

- 使用 Jenkins 做自动化测试。

# 第 1.1 章 - Jest 单元测试基础入门

- given
  - Arrage
  - 准备测试数据：有时候可以抽取到 beforeEach，或者 mock 模块。
- when
  - Act
  - 采取行动：调用响应模块，执行对应的函数或者组件渲染方法
- then
  - Assert
  - 断言：借助 matchers 的能力，jest 还可以扩展自己的 matcher

# 断言语句 matcher

- toBe
  - 等于“===”
- toEqual
  - 对象之间是否值相等，而不是只有引用相等。
- toBeFalsy
  - 判断 boolean 值。
- toHaveLength
  - 判断数组的长度
- toHaveBeenCalled
  - 判断方法是否被调用
- toHaveBeenCalledTimes
  - 方法被调用了几次
- toThrow
  - 判断是否有某些异常
- toMatchSnapshot
  - 验证快照之间是否相等。
- toMatchInlineSnapshot
  - 略
- expect.extend(matchers)
  - 扩展属于自己的 matcher

# 第 1.2 章 - Jest 单元测试之模块间依赖 Fake、Stub、Mock、Spy。主要讲解模块之间的依赖。

## 写测试需要替换的对象：

- 数据库
- 网络请求
- 存取文件
- 任何外部系统
  - 比如浏览器的查看当前地址信息的 API

### 常用的方法

- mock
  - 解除掉依赖，模拟函数返回的结果，例如：异步请求、状态更新。

```js
// 模拟整个音乐播放器
import SoundPlayer from "./sound-player";
const mockPlayerSoundFile = jest.fn();
jest.mock("./sound-player", () => {
  return jest.fn().mockImplementation(() => {
    return { playSoundFile: mockPlayerSoundFile };
  });
});
```

- stub 模拟特定行为
- spy 监听模块行为

```js
const video = require("./video");

it("plays video", () => {
  const spy = jest.spyOn(video, "play");
  const isPlaying = video.play();

  expect(spy).toHaveBeenCalled();
  expect(isPlaying).toBe(true);
});
```

## 代码模块的易测性

- 模块之间要简单，如果要 mock 很多次，那么就需要思考了。需要符合【职责单一原则】

- 这里展示了 mock 的两种写法

```js
import searchNames from "./searchNames";
import { getNames } from "./services";

// 这里其实是mock的两种用法。
jest.mock("./services", () => ({
  getNames: jest.fn(),
  // getNames: jest.fn(() => {
  //   return ["john", "aaa", "bbb", "ccc"];
  // }),
}));

test("shold return empty result when not search", () => {
  //----------given----------
  const keyword = "frank";
  getNames.mockImplementation(() => []);
  //----------when----------
  const result = searchNames(keyword);
  //----------then----------
  expect(result).toEqual([]);
});

test("shold return target result when found search", () => {
  //----------given----------
  const keyword = "john";
  getNames.mockImplementation(() => ["john", "aaa", "bbb", "ccc"]);
  //----------when----------
  const result = searchNames(keyword);
  //----------then----------
  expect(result).toEqual(["john"]);
});
```

# 生成测试报告

```js
/**
 * 如果使用命令
 * npx jest --converage
 * 会生成一个报告。
 * 报告中会显示 functionNotTested() 函数，没有被执行。
 */
test("test function not tested", () => {
  //----------given----------
  const keyword = "huanggang";
  //----------when----------
  const result = functionNotTested(keyword);
  //----------then----------
  expect(result).toBe(`hello ${keyword} !`);
});
```

## 《测试奖杯》一种自下而上的 web 应用测试策略

- 你的测试与你的软件使用方式越相似，他们就越能给你带来信心。 ---Testing Library 作者

# 第 2.1 章 - 前端组件化 UI 测试 - Testing Library

- 每个组件都能够简化为表达式：

  - UI=F(data)

- 重点测试功能单一的子组件，别测试最顶层的父组件。
  - 最顶层的父组件太多逻辑了，只要保证好子组件能够通过测试。

## Testing Libraray vs Enzyme

- Enzyme 是 react 社区用的比较多。
- 推荐使用 Testing Library。能够测试各种各样的框架。
  - 封装的很多方法，能够让我们一次学习多次使用。

### 查询组件渲染元素

|    type    | NoMatch | 1Match | 1+Match | Await? |
| :--------: | :-----: | :----: | :-----: | :----: |
|   getBy    |  throw  | return |  throw  |   No   |
|  getAllby  |  throw  | array  |  array  |   No   |
|   findBy   |  throw  | return |  throw  |  Yes   |
| findAllBy  |  throw  | array  |  array  |  Yes   |
|  queryBy   |  null   | return |  throw  |   No   |
| queryAllBy |   []    | array  |  array  |   No   |

### UI 交互行为的测试

```js
userEvent.click();
userEvent.dblClick();
userEvent.type();
userEvent.keyboard();
userEvent.upload();
userEvent.clear();
userEvent.selectOptions();
userEvent.deselectOptions();
userEvent.tab();
userEvent.hover();
userEvent.unhover();
userEvent.paste();
```

## @testing-library/react@12 安装这个版本才能匹配 react@17

### 这里无法使用 import 引入.jsx 文件

- 对比之前写过的项目:

```shell
git@github.com:vincentCheng/my-jest-learning.git
```

发现之前的项目根本没有 @babel/prest-env 之类的转换器，反而使用的是 ts-jest 。
网上的配置真的很莫名其妙，而且还没什么作用。

# 第 2.2 章 - 前端 UI 测试实战：如何测试表单？TodoList 示例

- 参考文献：https://juejin.cn/post/7137063260120940551

  - 需要使用 PropsWithChildren

```js
type PropsListUnit = PropsWithChildren<{ list: Array<JSX.Element> }>;
```

- 这里要给 list 的 key 一个 uuid，但是 jest@27 中的 jsdom 就是不支持。需要在 jest-setup.ts 中添加

```js
const { Crypto } = require("@peculiar/webcrypto");
global.crypto = new Crypto();
```

### userEvent 的写法已经更改

```js

test("should show full name when type", async () => {
  const name = "John Doe";
  const user = userEvent.setup();

  render(<App />);

  const inputElement: HTMLInputElement = screen.queryByPlaceholderText(
    "Type your name"
  ) as HTMLInputElement;

  // 2023年3月18日18:56:18 已经修改成这样了。
  await user.type(inputElement, name);

  expect(screen.getByText(name)).toBeInTheDocument();
});
```

### 输入完成之后按下回车键

```js
// 输入完成之后按下回车键
await user.type(inputElement, "{enter}");
await user.type(inputElement, "input some information!{enter}");
```

- 在 jest 中，`{enter}`是通识，这点要记住。

# 第 2.3 章 - 实践进阶：如何测试异步代码？API Mock 最佳实践 MSW
