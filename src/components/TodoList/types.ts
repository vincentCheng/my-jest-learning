type ListFormItemType = {
  keyOfItem: string;
  isCompleted: boolean;
  text: string;
  toggleTodo: (key: string) => void;
  removeTodo: () => void;
};

export default ListFormItemType;
