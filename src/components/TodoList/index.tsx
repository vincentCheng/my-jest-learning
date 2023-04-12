import React from "react";
import {
  useState,
  FC,
  FormEvent,
  ChangeEvent,
  MouseEvent,
  useEffect,
  useLayoutEffect,
} from "react";
import ListForm from "./ListForm";
import ListFormItemType from "./types";
import useLocalStorage from "@/utils/useLocalStorage";

export enum TestIds {
  DATA_TEST_ID_INPUT = "todolist-input",
}

interface WindowSize {
  width: number;
  height: number;
}

const useWindowSize = () => {
  const [size, setSize] = useState<WindowSize>({
    width: document.documentElement.clientWidth,
    height: document.documentElement.clientHeight,
  });

  // dom更新之前同步执行操作，对DOM元素进行精准的测量。
  useLayoutEffect(() => {
    const handleResize = () => {
      setSize({
        width: document.documentElement.clientWidth,
        height: document.documentElement.clientHeight,
      });
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

  return size;
};

interface ScrollOffset {
  x: number;
  y: number;
}

const useWindowScroll = () => {
  const [off, setOff] = useState<ScrollOffset>({
    x: window.scrollX,
    y: window.scrollY,
  });

  useLayoutEffect(() => {
    const handleScroll = () => {
      setOff({
        x: window.scrollX,
        y: window.scrollY,
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  return off;
};

// 简单的todo列表组件
const Index: FC = () => {
  const [listItem, setListItem] = useState<string>("");
  const [list, setList] = useState<ListFormItemType[]>([]);
  const [keyOfItemWhichChanged, setKeyOfItemWhichChanged] = useState<string>();
  const [_, setValue] = useLocalStorage("windowSize", "react");

  const sizeOfWindow = useWindowSize();
  console.log(`width ${sizeOfWindow.width}, height ${sizeOfWindow.height}`);

  setValue(`width ${sizeOfWindow.width}, height ${sizeOfWindow.height}`);

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

    setList(tempList);
    setListItem("");
  }

  function handleInputChange(event: ChangeEvent<HTMLInputElement>): void {
    setListItem(event.target.value);
  }

  useEffect(() => {
    if ("" === keyOfItemWhichChanged) {
      return;
    }

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
          data-testid={TestIds.DATA_TEST_ID_INPUT}
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
