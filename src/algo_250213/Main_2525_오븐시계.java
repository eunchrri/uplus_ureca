package algo_250213;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.StringTokenizer;

public class Main_2525_오븐시계 {
	/*
	 * 적당한 양의 오리 훈제 재료를 인공지능 오븐에 넣으면 
	 * 인공지능 오븐은 오븐구이가 끝나는 시간을 분 단위로 자동적으로 계산
	 * 훈제오리구이를 시작하는 시각과 오븐구이를 하는 데 필요한 시간이 분단위로 주어졌을 때, 
	 * 오븐구이가 끝나는 시각을 계산하는 프로그램을 작성하시오.
	 * 
	 * 입: 
	 * 	첫째 줄: 현재 시각 / 시(0<=A<=23) 분(0<=B<=59)가 정수로 빈칸을 사이에 두고 순서대로 주어진다.
	 * 	둘째 줄: 요리하는데 필요한 시간이 C(0<=C<=1000)분 단위로 주어진다.
	 * 출:
	 * 	종료 시각의 시와 분을 공백을 사이에 두고 출력된다.
	 * 	23시 59분에서 1분이 지나면 다시 0시 0분이 된다.
	 * 
	 * 1. 입력 받기
	 * 2. 시간 변환
	 * 2.1 m + t >= 60 => h = h + (m + t) / 60, m = (m + t) % 60
	 * 2.2 24시간 형식 유지하기
	 *  
	 * */
	public static void main(String[] args) throws IOException{
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		StringTokenizer st = new StringTokenizer(br.readLine());
		int h = Integer.parseInt(st.nextToken());
		int m = Integer.parseInt(st.nextToken());
		int t = Integer.parseInt(br.readLine());
		br.close();
		
		if (m + t >= 60) {
			h = h + (m+t) / 60;
			m = (m+t) % 60;
			if ( h >= 24) {
				h = h % 24;
			}
		} else {
			m = m+t;	
		}
		if (h>=24) {
			h = h % 24;
		}
		System.out.println(h+" "+m);
	}
}
