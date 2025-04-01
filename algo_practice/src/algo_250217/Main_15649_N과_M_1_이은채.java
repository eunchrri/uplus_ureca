package algo_250217;

import java.util.Arrays;
import java.util.Scanner;

public class Main_15649_N과_M_1_이은채 {
	/*
	 * 1부터 N까지의 자연수 중에서 중복 없이 M개를 고른 수열
	 * 입: 첫째 줄에 자연수 N과 M이 주어진다. (1 <= M <= N <= 8)
	 * 출: 한 줄에 하나씩 문제의 조건을 만족하는 순열 출력.
	 * 	  중복되는 수열 여러번 출력하면 안됨.
	 * 	  각 수열 공백으로 구분해서 출력
	 * 	  수열 사전 순으로 증가하는 순서로 출력
	 * 
	 * 비트 마스크 이용?
	 * 
	 * */
	static int N;
	static int M;
	static int[] numbers;

	static void permutation(int depth, int flag) {
		if (depth==M) {
			StringBuilder sb = new StringBuilder();
			for (int num : numbers) {
				sb.append(num).append(" ");
			}
			System.out.println(sb.toString().trim());
			return;
		}
		for (int i = 1; i <= N; i++) {
			if ((flag & 1<<i) != 0) continue;
			numbers[depth] = i;
			permutation(depth+1, flag|1<<i);
			
		}
	}
	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		N = sc.nextInt();
		M = sc.nextInt();
		sc.close();
		
		numbers = new int[M]; // 순열 담을 배열
		permutation(0, 0);
		

	}

}
