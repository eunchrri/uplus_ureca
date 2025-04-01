package algo_250218;

import java.util.Scanner;

public class Main_boj_2961_도영이가_만든_맛있는_음식_이은채 {
	/*
	 * 재료 N개, 각 재료의 신맛 S, 쓴맛 B를 미리 알고 있음.
	 * 요리를 할 때 그 음식의 신맛은 재료의 신맛의 곱,
	 * 			그 음식의 쓴맛은 재로의 쓴맛의 합이다.
	 * 재료는 적어도 하나 사용해야 한다.
	 * 재료의 신맛과 쓴맛이 주어졌을 때, 신맛과 쓴맛의 차이가 가장 작은 음식을 만드는 프로그램
	 * 
	 * 입: 
	 * 	첫째줄: 재로의 개수 N(1<=N<=10)
	 * 	둘째줄: 그 재료의 신맛과 쓴맛이 공백으로 구분되어 있음
	 * 
	 * 출: |신맛 - 쓴맛|이 가장 작은 요리의 차이를 출력.
	 * */
	static int N;
	static int[][] ingredients;
	static int minDifference = Integer.MAX_VALUE;
	
	/**
	 * nCr  =>  n-1Cr-1  + N 번째   선택 한 경우 
	 *          n-1Cr              선택 안한 경우 
	 * @param index		현재 탐색 중인 재료의 인덱스
	 * @param s			현재까지 선택한 재료들의 신맛의 곱
	 * @param c			현재까지 선택한 재료들의 쓴맛의 합
	 * @param count		현재까지 선택한 재료의 개수(최소 1개 이상)
	 * 
	 */
	static void cooking(int index, int s, int b, int count) {
		// index == N이면 모든 재료를 탐색한 것이므로 종료
		// 단 count > 0일 때만 신맛, 쓴맛의 차이를 계산하고 최솟값(minDifference) 갱신
		if (index == N) {
			if (count>0) {
				minDifference = Math.min(minDifference, Math.abs(s-b));
			}
			return;
		}
		
		// 현재 재료를 선택하는 경우
		cooking(index+1, s*ingredients[index][0], b+ingredients[index][1], count+1);
		
		// 현재 재료를 선택하지 않는 경우
		cooking(index+1, s, b, count);
	}
	
	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		N = sc.nextInt();
		ingredients = new int[N][2];
		
		for (int i = 0; i < N; i++) {
			ingredients[i][0] = sc.nextInt();	// 신맛
			ingredients[i][1] = sc.nextInt();	// 쓴맛
		}
		
		sc.close();
		cooking(0,1,0,0);
		System.out.println(minDifference);
	}

}
