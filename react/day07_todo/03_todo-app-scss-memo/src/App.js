import React, { useState, useRef, useCallback } from "react";
import TodoTemplate from "./components/TodoTemplate";
import TodoInsert from "./components/TodoInsert";
import TodoList from "./components/TodoList";

const createTodos = () => {
  const array = [];
  for (let i = 1; i <= 2500; i++) {
    array.push({
      id: i,
      text: `할일 ${i}`,
      checked: false,
    });
  }
  return array;
};

const App = () => {
  /*
    1. useCallback이 state를 모니터링, 상태가 변할 때마다 수행
    
    useCallback(() => {
      setter(변할 상태)
    }, [상태])

    2. update 함수를 통해 상태 변경 
      => useCallback이 state를 모니터링 x, 컴포넌트가 렌더링되는 처음에만 함수가 수행됨.
      => 상태가 변할 때마다 setter((상태) => 새로운 상태) 함수가 수행된다.
    
      useCallback(() => {
        setter((상태) => return 새로운 상태)
      }, [])
   */
  const [todos, setTodos] = useState(createTodos);

  // 고유 값으로 사용 될 id
  // ref 를 사용하여 변수 담기
  const nextId = useRef(todos.length + 1);

  const onInsert = useCallback((text) => {
    const todo = {
      id: nextId.current,
      text,
      checked: false,
    };
    setTodos((todos) => todos.concat(todo));
    nextId.current += 1; // nextId 1 씩 더하기
  }, []);

  const onRemove = useCallback((id) => {
    setTodos((todos) => todos.filter((todo) => todo.id !== id));
  }, []);

  const onToggle = useCallback((id) => {
    setTodos((todos) =>
      todos.map((todo) => (todo.id === id ? { ...todo, checked: !todo.checked } : todo))
    );
  }, []);

  return (
    <TodoTemplate>
      <TodoInsert onInsert={onInsert} />
      <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} />
    </TodoTemplate>
  );
};

export default App;
