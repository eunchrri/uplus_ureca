package algo_250220;

import java.util.Scanner;

public class Main_boj_2741_N_찍기_이은채 {
	/*
	 * 자연수 N이 주어졌을 때 1부터 N까지 한 줄에 하나씩 출력하는 프로그램
	 * */
	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		int N = sc.nextInt();
		sc.close();
		
		for (int i = 1; i < N+1; i++) {
			System.out.println(i);
		}

	}

}
