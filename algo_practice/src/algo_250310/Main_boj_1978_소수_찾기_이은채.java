package algo_250310;

import java.util.Scanner;

public class Main_boj_1978_소수_찾기_이은채 {
	/*
	 * 주어진 수 N개 중에서 소수가 몇 개인지 찾아서 출력하는 프로그램을 작성하시오.
	 * 입력:
	 *  첫 줄에 수의 개수 N이 주어진다. N은 100 이하.
	 *  다음 줄에 N개의 수가 주어지는데 수는 1000 이하의 자연수이다.
	 *  
	 * 출력:
	 * 	주어진 수들 중 소수의 개수를 구하여라.
	 * 
	 * */
	static int N;
	static int[] input;
	public static void main(String[] args) {
		// 1. N 입력받기
		Scanner sc = new Scanner(System.in);
		N = sc.nextInt();
		input = new int[N];
		
		// 2. 입력받은 수 n 개를 배열에 저장
		for (int i = 0; i < N; i++) {
			input[i] = sc.nextInt();
		}
				
		// 4. 소수 개수 세기
		int cnt = 0;
		for (int num : input) {
			if (isPrime(num)) {
				cnt++;
			}
		}
		
		// 5. 소수인 수 출력 ~
		System.out.println(cnt);
		
		sc.close();
	}
	// 3. 소수인지 판별하는 함수 만들기
	static boolean isPrime(int num) {
		if(num < 2) return false;		// 1은 소수 아님
		for (int i = 2; i*i <= num; i++) {
			if (num % i == 0) return false;
		}
		return true;
	}
}
