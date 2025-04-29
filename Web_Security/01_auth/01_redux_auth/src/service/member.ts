import { Member, ResMember } from "@/types/member";
import axios from "@/utils/http-commons";

export const searchMember = async (id: string): Promise<ResMember> => {
  const { data } = await axios.get(`/member/${id}`);
  return data;
};

//////////TODO M7. token처리를 위한 인증 api 함수 생성하기

//////////TODO M8. access token이 만료된 경우 재발급 받기위한  api 함수 생성하기

export const updateMember = async (member: Member): Promise<Member> => {
  const { data } = await axios.put("/member", member);
  return data;
};
export const registMember = async (member: Member): Promise<Member> => {
  const { data } = await axios.post("/member", member);
  return data;
};
export const removeMember = async (id: string): Promise<Member> => {
  const { data } = await axios.delete(`/member/${id}`);
  return data;
};
