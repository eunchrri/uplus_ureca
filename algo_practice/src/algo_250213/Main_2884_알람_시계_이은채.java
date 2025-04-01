package algo_250213;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.StringTokenizer;

public class Main_2884_알람_시계_이은채 {
	/*
	 * 창영이의 추천 방법: 45분 알람 일찍 설정하기
	 * 첫째 줄에 두 정수 H와 M이 주어진다. (H시 M분)
	 * 입력 시간은 24시간 시간 표현 사용 => 0:0(자정) ~ 23:59(다음날 자정 1분전)
	 * 시간을 나타낼 때 불필요한 0은 사용하지 않는다.
	 * 
	 * 첫째 줄에 상근이가 설정해야 하는 알람 시간을 출력하자.
	 * 
	 * */
	public static void main(String[] args) throws IOException{
		
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		StringTokenizer st = new StringTokenizer(br.readLine());
		
		int H = Integer.parseInt(st.nextToken());
		int M = Integer.parseInt(st.nextToken());
		br.close();
		
		if (M >= 45) {
			M = M - 45;
		} else {
			M = 60 + M - 45;
			if (H == 0) {		// 예외처리: 0시일 경우 창영 방법으로 변환할 때 23로 변경
				H = 23;
			} else {				
				H = H - 1;
			}
		}
		System.out.println(H+" "+M);
		
//		if (M >= 45) {
//			M = M - 45;
//			System.out.println(H+" "+M);
//		} else {
//			M = 60 + M - 45;
//			H = H - 1;	// H가 0 일때 음수가 될 수 있다. => 예외처리 필수..ㅜ
//			System.out.println(H+" "+M);
//		}
		
	}

}
