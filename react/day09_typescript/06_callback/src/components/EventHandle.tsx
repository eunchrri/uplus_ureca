import React, { useCallback, useState } from "react";

interface FormData {
  username: string;
  message: string;
}

const EventHandle = () => {
  const [data, setData] = useState<FormData>({
    username: "",
    message: "",
  });

  const { username, message } = data;

  const handlerChange = useCallback<React.ChangeEventHandler<HTMLInputElement>>((e) => {
    const { name, value } = e.target;
    setData((data) => ({
      ...data,
      [name]: value,
    }));
  }, []);

  const handlerClick = useCallback(() => {
    setData(() => ({
      username: "",
      message: "",
    }));
  }, []);

  const handlerKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handlerClick();
    }
  };

  return (
    <div>
      <input
        type="text"
        onChange={handlerChange}
        onKeyDown={handlerKeyDown}
        value={username}
        name="username"
        placeholder="user name"
      ></input>
      <input
        type="text"
        onChange={handlerChange}
        onKeyDown={handlerKeyDown}
        value={message}
        name="message"
        placeholder="message"
      ></input>
      <button type="button" onClick={handlerClick}>
        확인
      </button>
      <div></div>
    </div>
  );
};

export default EventHandle;
