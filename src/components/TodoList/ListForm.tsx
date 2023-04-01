import React, { PropsWithChildren, useEffect, useState } from "react";
import ListFormItemType from "./types";
import Item from "./Item";

// 参考文献：https://juejin.cn/post/7137063260120940551
export type ListFormType = PropsWithChildren<{ list: ListFormItemType[] }>;

/**
 * 返回要使用 JSX.Element
 * @param param0
 * @returns
 */
function ListForm({ list }: ListFormType): JSX.Element {
  const [result, setResult] = useState<JSX.Element[]>();

  useEffect(() => {
    const items = list.map((e) => {
      return (
        <li key={e.keyOfItem}>
          <Item {...e} />;
        </li>
      );
    });

    setResult(items);
  }, [list]);

  return <ul>{result}</ul>;
}

export default ListForm;
