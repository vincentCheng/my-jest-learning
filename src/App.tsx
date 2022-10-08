import React from "react";
import { Button } from "antd";
import Title from "components/Title";
import AuthButton from "components/AuthButton";

const App = () => {
  return (
    <div>
      <h1>Hello</h1>
      <Button>点我</Button>
      <section>
        <Title type="small" title="小字" />
        <Title type="large" title="大字" />
      </section>
      <section>
        <AuthButton>登录</AuthButton>
      </section>
    </div>
  );
};

export default App;
