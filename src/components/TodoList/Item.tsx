import React, { useEffect, useState } from "react";
import ListFormItemType from "./types";

export enum Status {
  COMPLETED = "Completed",
  WORING = "Woring",
}

export default function Item(props: ListFormItemType) {
  const { keyOfItem, isCompleted, text, toggleTodo, removeTodo } = props;
  const [status, setStatus] = useState<Status>(Status.WORING);

  useEffect(() => {
    setStatus(isCompleted ? Status.COMPLETED : Status.WORING);
  }, [isCompleted]);

  return (
    <>
      <p>{text}</p>
      <button
        type="button"
        onClick={() => {
          console.log(`click key of item ${keyOfItem}`);

          toggleTodo(keyOfItem);
        }}
      >
        {status}
      </button>
      <button type="button" onClick={removeTodo}>
        <span>Remove</span>
      </button>
    </>
  );
}
