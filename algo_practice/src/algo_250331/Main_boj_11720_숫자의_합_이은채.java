package algo_250331;

import java.util.Scanner;
import java.util.StringTokenizer;

public class Main_boj_11720_숫자의_합_이은채 {
	/*
	 * n 개의 숫자가 공백 없이 쓰여있다.
	 * 이 숫자를 모두 합해서 출력하는 프로그램을 작성하시오.
	 * */
	public static void main(String[] args) {
		// TODO Auto-generated method stub
		// 1. n 입력받기
		Scanner sc = new Scanner(System.in);
		int n = sc.nextInt();
		
		// 2. 공백없는 숫자 문자열 입력받기
		String s = sc.next();				// 공백 없이 들어온 숫자 문자열
		
		// 3. 숫자 하나씩 잘라 배열에 저장
		int[] num = new int[n];
		for (int i = 0; i < n; i++) {
			num[i]= s.charAt(i) - '0';		// 문자 => 숫자로 변환해서 배열에 저장
		}
		
		
		int sum = 0;
		for (int i = 0; i < n; i++) {
			sum += num[i];
		}
		
		System.out.println(sum);
	}
}
