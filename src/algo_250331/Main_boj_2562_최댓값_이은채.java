package algo_250331;

import java.util.Scanner;

public class Main_boj_2562_최댓값_이은채 {
	/*
	 * 9 개의 서로 다른 수가 주어질 때, 이들 중 최댓값을 찾고 그 최댓값이 몇 번째 수인지를 구하는 프로그램 작성하시오.
	 * 
	 * */
	public static void main(String[] args) {
		// 1. 9 개의 수 입력받아 배열에 저장
		Scanner sc = new Scanner(System.in);
		int[] arr = new int[9];
		
		for (int i = 0; i < 9; i++) {
			arr[i] = sc.nextInt();
		}
		
		int max = arr[0];
		int index = 0;
		for (int i = 1; i < 9; i++) {
			if (arr[i] > max) {
				max = arr[i];
				index = i;
			}
		}
		System.out.println(max);
		System.out.println(index+1);
	}

}
