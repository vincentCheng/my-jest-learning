import React, { FC } from "react";
import { render as rtlRender, RenderOptions } from "@testing-library/react";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import { reducer, RootState } from "store/index";

interface CustomRenderOptions extends RenderOptions {
  preloadedState?: RootState;
  store?: ReturnType<typeof configureStore>;
}

/**
 * 带上 redux
 * @param ui
 * @param options
 * @returns
 */
const renderWithRedux = (
  ui: React.ReactElement,
  options: CustomRenderOptions
) => {
  // 获取自定义的 options，options 里带有 store 内容
  const {
    preloadedState = {},
    store = configureStore({ reducer, preloadedState }),
    // 重新赋值options中的preloadedState和store两个值。
    ...renderOptions
  } = options;

  // 使用 Provider 包裹
  const wrapper: FC = ({ children }) => {
    return <Provider store={store}>{children}</Provider>;
  };

  // 使用 RTL 的 render 函数
  return rtlRender(ui, { wrapper, ...renderOptions });
};

export default renderWithRedux;
