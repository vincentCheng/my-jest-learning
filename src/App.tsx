import React, { useState } from "react";
import { Button } from "antd";
import Title from "components/Title";
import AuthButton from "components/AuthButton";
import User from "components/User";
import Index from "components/TodoList";

const App = () => {
  const [fullName, setFullName] = useState("");
  return (
    <div>
      <p>learn react</p>
      <input
        onChange={(e) => {
          setFullName(e.target.value);
        }}
        placeholder="Type your name"
      />
      <p>My name is</p>
      <p>{fullName}</p>
      <Index />
    </div>
  );
};

export default App;

/* <h1>Hello</h1>
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
      </section> */
