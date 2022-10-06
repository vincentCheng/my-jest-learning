// src/utils/getSearchObj.ts
const getSearchObj = () => {
  // ?a=1&b=2
  const { search } = window.location;

  // a=1&b=2
  const searchStr = search.slice(1);

  // ['a=1', 'b=2']
  const pairs = searchStr.split("&");

  // { 'a': '1' }
  const searchObj: Record<string, string> = {};

  pairs.forEach((pair: any) => {
    // [a, 1]
    const [key, value] = pair.split("=");
    searchObj[key] = value;
  });

  return searchObj;
};

const getSearchObjNew = () => {
  //将键值对转成对象。
  return Object.fromEntries(
    new URLSearchParams(window.location.search).entries()
  );
};

export default getSearchObj;
