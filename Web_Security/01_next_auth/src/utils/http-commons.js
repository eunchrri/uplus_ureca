import axios from "axios";
import { getSession } from "next-auth/react";
//const BASE_URL = "http://10.4.2.100:8080/eureka/";
const BASE_URL = "http://localhost:8080/eureka/";

// local vue api axios instance
const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json;charset=utf-8",
  },
  withCredentials: true,
});

api.interceptors.request.use(async (config) => {
  const session = await getSession();
  const accessToken = session?.accessToken;
  const refreshToken = session?.refreshToken;

  console.log("axios.....accessToken:", accessToken);
  console.log("axios.....refreshToken:", refreshToken);

  if (accessToken) {
    config.headers.Authorization = `Bearer ${accessToken}`;
  }
  if (refreshToken) {
    config.headers["Refresh-Token"] = refreshToken; // 서버와 약속된 이름으로!
  }
  return config;
});

/*
응답 인터셉터
1. 서버에서 access token 만료로 error 처리한 경우 
access token 재발급을 요청하는 경우 
   
*/
// api.interceptors.response.use(
//   (response) => response,
//   async (error) => {
//     const originalRequest = error.config;

//     // access token 만료로 401 떴고, 재시도한 적 없는 요청이면
//     if (error.response?.status === 401 && !originalRequest._retry) {
//       originalRequest._retry = true;

//       try {
//         // refresh token을 쿠키에 보내서 새로운 access token 요청
//         const res = await axios.post(`${BASE_URL}auth/refresh`, {}, { withCredentials: true });

//         // 새 access token 저장
//         accessToken = res.data.accessToken;

//         // Authorization 헤더 업데이트
//         originalRequest.headers.Authorization = `Bearer ${accessToken}`;

//         // 실패했던 요청 다시 보내기
//         return api(originalRequest);
//       } catch (refreshError) {
//         console.error("리프레시 실패:", refreshError);
//         // 리프레시도 실패했으면 강제 로그아웃
//         await signOut();
//         return Promise.reject(refreshError);
//       }

//     }

//     return Promise.reject(error);
//   },
// );

/*
 응답 인터셉터
 2. 서버에서 access token이 만료된 경우 refresh token을 확인하고 
    자동으로 access token을 발급 해주는 경우 
 */
/*
응답 인터셉터:
서버에서 새 accessToken이 발급되면 세션에 저장된 토큰을 업데이트함
*/
api.interceptors.response.use(
  async (response) => {
    const newAccessToken = response.headers["authorization"]; // 소문자 header 키 주의
    console.log("newAccessToken.......", newAccessToken);
    if (newAccessToken) {
      const session = await getSession();

      if (session) {
        await update({
          ...session,
          accessToken: newAccessToken,
        });
        console.log("accessToken 갱신 완료:", newAccessToken);
      }
    }
    return response;
  },
  async (error) => {
    const originalRequest = error.config;

    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        return api(originalRequest);
      } catch (retryError) {
        console.error("요청 재시도 실패:", retryError);
        await signOut();
        return Promise.reject(retryError);
      }
    }

    return Promise.reject(error);
  }
);

export default api;
