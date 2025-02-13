package boj_250213;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.StringTokenizer;

public class Main_1330_두_수_비교하기_이은채 {
	/*
	 * 두 정수 a와 b가 주어졌을 때 ab 비교하는 프로그램
	 * a, b 입력받기
	 * 
	 * 결과값 출력하기
	 * 	- a가 b보다 큰 경우에는 >
	 * 	- a가 b보다 작은 경우에는 <
	 *  - a가 b와 같은 경우에는 ==
	 *   
	 * */
	public static void main(String[] args) throws IOException{
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		StringTokenizer st = new StringTokenizer(br.readLine());
		
		int a = Integer.parseInt(st.nextToken());
		int b = Integer.parseInt(st.nextToken());
		
		br.close();
		
		if (a>b) {
			System.out.println(">");
		} else if (a<b) {
			System.out.println("<");
		} else System.out.println("==");

	}
	// 14268KB 100ms

}
