"use client";
import { useRef } from "react";
import styles from "./UseMutationEx.module.scss";
import { createUser } from "@/service/query";
import { useMutation } from "@tanstack/react-query";

const UseMutaionEx = () => {
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const mutation = useMutation({
    mutationFn: createUser,
    onSuccess: (data) => {
      alert(`등록 성공: ${data.id}`);
    },
    onError: (error: Error) => {
      alert(`등록 실패: ${error.message}`);
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const name = nameRef.current?.value || "";
    const email = emailRef.current?.value || "";
    mutation.mutate({ name, email });
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <input type="text" ref={nameRef} placeholder="Name" className={styles.input} required />
      <br />
      <input type="email" ref={emailRef} placeholder="Email" className={styles.input} required />
      <br />
      <button type="submit" className={styles.submitbutton}>
        등록
      </button>
    </form>
  );
};
export default UseMutaionEx;
