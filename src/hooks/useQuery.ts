import React from "react";
import { useLocation } from "react-router-dom";

// 获取查询参数
const useQuery = () => {
  const { search } = useLocation();

  // 当search改变，就获取一次url中的查询参数，例如：?a=1&b=2。
  // 这个值保存在缓存中。
  return React.useMemo(() => new URLSearchParams(search), [search]);
};

export default useQuery;
