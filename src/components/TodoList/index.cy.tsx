// import React from "react";
import { mount } from "@cypress/react";
import ListForm from "./ListForm";
import ListFormItemType from "./types";
import Todo from "./index";
import Item, {
  TestIds as TestIdsTodoListItem,
  Status as StatusTodoListItem,
} from "components/TodoList/Item";
import { TestIds as TestIdsTodoList } from "components/TodoList";

describe("TodoList", () => {
  it("should renders new item", () => {
    const str = "111";
    const str2 = "Working";
    const list: ListFormItemType[] = [
      {
        keyOfItem: "1",
        isCompleted: false,
        text: str,
        toggleTodo: cy.stub(),
        removeTodo: cy.stub(),
      },
    ];

    mount(<Todo />);
    cy.get(`[data-testid=${TestIdsTodoList.DATA_TEST_ID_INPUT}]`).type(
      "111{enter}"
    );
    cy.contains(".todo", StatusTodoListItem.WORING)
      .click()
      .should("have.text", StatusTodoListItem.COMPLETED);
    cy.get(`[data-testid=${TestIdsTodoListItem.DATA_TEST_ID_REMOVE}]`)
      .should("have.length", 1)
      .click()
      .should("have.length", 0);
  });
});
