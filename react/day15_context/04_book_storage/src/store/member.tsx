"use client";
import { Member } from "@/types/member";
import { createContext, ReactNode, useContext, useEffect, useMemo, useState } from "react";

/////todo1. 제공할 상태와 상태를 변경할 함수에 대한 타입 설정하기
interface MemberContextType {
  member: Member | null;
  loaded: boolean;
  login: (member: Member) => void;
  logout: () => void; // member 정보를 초기화하기 때문에 인자가 필요없음
}

/////todo2. createContext()함수로 제공할 context를 생성하기
const MemberContext = createContext<MemberContextType | undefined>(undefined);

/////todo3. 타입에 해당하는 구현부를 Provider로 작성해서 리턴하기
/////type에서 선언한 상태와 함수를 value에 필수로 작성하기
export const MemberProvider = ({ children }: { children: ReactNode }) => {
  const [member, setMember] = useState<Member | null>(null);
  const [loaded, setLoaded] = useState<boolean>(false);

  /*
    localStorage
    - 브라우저에 저장되는 key-value 쌍으로 이루어진 데이터베이스
    - 웹 애플리케이션이 종료되더라도 데이터가 유지됨
    - removeItem() 으로 삭제하기 전까지 저장

    sessionStorage
    - 브라우저 세션에 저장되는 key-value 쌍으로 이루어진 데이터베이스
    - 세션이 유지되는 동안 저장장
    - 브라우저 세션이 종료되면 데이터가 삭제됨
   */

  // 새로고침 시 localStorage에서 member 정보를 가져오기
  useEffect(() => {
    const store = sessionStorage.getItem("member"); // localStorage에서 key가 member인 데이터 가져오기
    if (store) {
      try {
        setMember(JSON.parse(store)); // JSON.parse로 문자열을 객체로 변환하여 setMember에 저장
      } catch (error) {
        setMember(null);
        console.log(error);
      }
    }
    setLoaded(true);
  }, []);

  const login = (member: Member) => {
    setMember(member);
    if (loaded) {
      sessionStorage.setItem("member", JSON.stringify(member));
    }
  };
  const logout = () => {
    setMember(null);
    sessionStorage.removeItem("member");
  };

  const returnValue = useMemo(
    () => ({
      member,
      loaded,
      login,
      logout,
    }),
    [member, loaded]
  );

  return <MemberContext.Provider value={returnValue}>{children}</MemberContext.Provider>;
};

/////todo4 커스텀 훅: useMemberContext
export const useMemberContext = () => {
  const context = useContext(MemberContext);
  if (!context) {
    throw new Error("useMemberContext must be used within a MemberPorovider");
  }
  return context;
};
