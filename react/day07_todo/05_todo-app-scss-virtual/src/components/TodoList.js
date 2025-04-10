import React, { useCallback } from "react";
import TodoListItem from "./TodoListItem";
import "./TodoList.scss";
import { List } from "react-virtualized";

const TodoList = ({ todos, onRemove, onToggle }) => {
  const rowRender = useCallback(
    ({ index, key, style }) => {
      const todo = todos[index];
      return (
        <TodoListItem todo={todo} key={key} onRemove={onRemove} onToggle={onToggle} style={style} />
      );
    },
    [onRemove, onToggle, todos]
  );

  return (
    <List
      className="TodoList"
      width={512}
      height={513}
      rowCount={todos.length}
      rowHeight={47}
      rowRenderer={rowRender}
      list={todos}
      style={{ outline: "none" }} // List에 기본으로 적용되는 outline 쓸지 여부 지정
    />
  );
};

export default React.memo(TodoList);
