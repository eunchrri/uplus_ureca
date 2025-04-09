// <form className="TodoInsert" onSubmit={onSubmit}>
//   <input placeholder="할 일을 입력하세요" value={value} onChange={onChange} />
//   <button type="submit">
//     <MdAdd />
//   </button>
// </form>

import { MdAdd } from "react-icons/md";
import "./TodoInsert.scss";
import { useCallback, useState } from "react";

function TodoInsert({ onInsert }) {
  const [value, setValue] = useState("");

  const onChange = useCallback(function (e) {
    setValue(e.target.value);
  }, []);

  const onSubmit = useCallback(
    function (e) {
      e.preventDefault();
      if (!value.trim()) {
        return;
      }
      onInsert(value);
      setValue("");
    },
    [onInsert, value]
  );

  return (
    <form className="TodoInsert" onSubmit={onSubmit}>
      <input placeholder="할 일을 입력하세요" value={value} onChange={onChange} />
      <button type="submit">
        <MdAdd />
      </button>
    </form>
  );
}

export default TodoInsert;
