import React, {
  useState,
  FC,
  FormEvent,
  ChangeEvent,
  MouseEvent,
  useEffect,
} from "react";
import ListForm from "./ListForm";
import ListFormItemType from "./types";

// import crypto from "crypto";

// 简单的todo列表组件
const Index: FC = () => {
  const [listItem, setListItem] = useState<string>("");
  const [list, setList] = useState<ListFormItemType[]>([]);
  const [keyOfItemWhichChanged, setKeyOfItemWhichChanged] = useState<string>();

  function toggleTodo(key: string) {
    setKeyOfItemWhichChanged(key);
  }

  function removeTodo() {
    console.log("remove to do ");
  }

  function handleSubmit(
    event: FormEvent<HTMLFormElement> | MouseEvent<HTMLButtonElement>
  ): void {
    event.preventDefault();

    // toggleTodoNew("1");

    if (listItem.length <= 0) {
      return;
    }

    const tempList: ListFormItemType[] = [...list];
    const key = crypto.randomUUID();

    tempList.push({
      keyOfItem: key,
      isCompleted: false,
      text: listItem,
      toggleTodo,
      removeTodo,
    });

    console.log("submit list", tempList);

    setList(tempList);
  }

  function handleInputChange(event: ChangeEvent<HTMLInputElement>): void {
    setListItem(event.target.value);
  }

  useEffect(() => {
    if ("" === keyOfItemWhichChanged) {
      return;
    }

    console.log("before list", list);
    console.log("changed key", keyOfItemWhichChanged);

    const result = list.map((e) => {
      const { keyOfItem, isCompleted } = e;

      if (keyOfItemWhichChanged === (keyOfItem as unknown)) {
        e.isCompleted = !isCompleted;
      }

      return e;
    });

    setList(result);
    setKeyOfItemWhichChanged("");
  }, [keyOfItemWhichChanged]);

  return (
    <div className="todo-list">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="input"
          placeholder="What needs to be done?"
          onChange={handleInputChange}
        />
        <button
          type="submit"
          className="btn btn-primary"
          onClick={handleSubmit}
        >
          行动起来！
        </button>
      </form>
      <ListForm list={list} />
    </div>
  );
};

export default Index;
