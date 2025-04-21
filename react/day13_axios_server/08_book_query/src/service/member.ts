import { Member } from "@/types/member";
import { localAxios } from "@/utils/http-commons";

export const registerMember = async (member: Member): Promise<void> => {
  const axios = localAxios();
  const { data } = await axios.post("/member", member);
  return data;
};

export const searchMember = async (id: string): Promise<Member> => {
  const axios = localAxios();
  const { data } = await axios.get(`/member/${id}`);
  return data;
};
