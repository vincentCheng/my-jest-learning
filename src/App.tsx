import React, { useState, useEffect } from "react";
import Index from "./components/TodoList";
import axios from "axios";
const url = "https://mysite.com/api/role";

const App = () => {
  const [fullName, setFullName] = useState("");

  useEffect(() => {
    axios
      .get(url)
      .then(({ data }) => {
        const { first, last } = data.results[0].name;
        setFullName(`${first} ${last}`);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

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
