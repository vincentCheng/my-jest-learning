import React from "react";
import { Button } from "antd";
import Title from "components/Title";
import AuthButton from "components/AuthButton";
import User from "components/User";

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
      <section>
        <User />
      </section>
    </div>
  );
};

export default App;
