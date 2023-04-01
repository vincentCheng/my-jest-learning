import { useEffect, useState } from "react";
import ListFormItemType from "./types";
import styles from "./item.module.less";
// import "./item.module.less";

export enum Status {
  COMPLETED = "Completed",
  WORING = "Working",
}

export enum TestIds {
  DATA_TEST_ID_REMOVE = "todolist-remove",
  DATA_TEST_ID_STATUS = "todolist-status",
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
        data-testid={TestIds.DATA_TEST_ID_STATUS}
        className={styles.todo}
        type="button"
        onClick={() => {
          // console.log(`click key of item ${keyOfItem}`);
          toggleTodo(keyOfItem);
        }}
      >
        {status}
      </button>
      <button
        data-testid={TestIds.DATA_TEST_ID_REMOVE}
        type="button"
        onClick={removeTodo}
      >
        <span>Remove</span>
      </button>
    </>
  );
}
