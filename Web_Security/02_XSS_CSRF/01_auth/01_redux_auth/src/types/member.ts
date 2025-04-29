export interface Member {
  id: string;
  password: string;
  name?: string;
  email?: string;
  address?: string;
  phone?: string;
}

//////////TODO M1. 인증을 위한 타입 선언하기

//////////TODO M2. state에 인증정보를 저장할 타입 선언하기

export interface ResMember {
  message: string;
  member?: Member;
}
