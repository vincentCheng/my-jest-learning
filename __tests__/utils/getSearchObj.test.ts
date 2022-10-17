import getSearchObj from "utils/getSearchObj";

describe("getSearchObj", () => {
  const urlBase = "https://www.baidu.com";
  const url = urlBase + "?a=1&b=2";

  it("可以换取当前网址的查询参数对象", () => {
    // window.location.href = "https://www.baidu.com?a=1&b=2";
    // globalThis.jsdom.reconfigure({
    //   url: "https://www.baidu.com?a=1&b=2",
    // });
    window.location.assign(url);

    expect(window.location.search).toEqual("?a=1&b=2");
    expect(getSearchObj()).toEqual({
      a: "1",
      b: "2",
    });
  });

  it("空参数返回空", () => {
    // window.location.href = "https://www.baidu.com";

    // globalThis.jsdom.reconfigure({
    //   url: urlBase,
    // });
    window.location.assign(urlBase);

    expect(window.location.search).toEqual("");
    expect(getSearchObj()).toEqual({});
  });
});
