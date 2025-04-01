package algo_250310;

import java.util.Iterator;
import java.util.Scanner;

public class Main_boj_2798_블랙잭_이은채 {
	/*
	 * 김정인 버전의 블랙잭에서 각 카드에는 양의 정수가 쓰여 있다. 
	 * 그 다음, 딜러는 N장의 카드를 모두 숫자가 보이도록 바닥에 놓는다. 그런 후에 딜러는 숫자 M을 크게 외친다.
	 * 이제 플레이어는 제한된 시간 안에 N장의 카드 중에서 3장의 카드를 골라야 한다.
	 * 플레이어가 고른 카드의 합은 M을 넘지 않으면서 M과 최대한 가깝게 만들어야 한다.
	 * 
	 * N장의 카드에 써져 있는 숫자가 주어졌을 때,
	 * M을 넘지 않으면서 M에 최대한 가까운 카드 3장의 합을 구해 출력하시오.
	 * 
	 * 입력:
	 * 	첫째 줄에 카드의 개수 N과 M이 주어진다.
	 * 	둘째 줄에는 카드에 쓰여 있는 수가 주어진다.
	 * 
	 * 출력:
	 * 	합이 M을 넘지 않는 카드 3장을 찾을 수 있는 경우만 입력으로 주어진다.
	 * 
	 */
	static int N, M;			// 카드의 개수 N, 원하는 수 M
	static int[] input;			// 입력받은 카드 N개의 수를 저장할 배열
	static int[] numbers;		// 뽑은 3개의 수를 저장할 배열
	static int maxSumUnderM;	// M을 넘지 않는 최대 합	
	public static void main(String[] args) {
		// TODO Auto-generated method stub
		// 1. N, M, N개의 수 입력 받기
		Scanner sc = new Scanner(System.in);
		N = sc.nextInt();
		M = sc.nextInt();
		input = new int[N];
		
		for (int i = 0; i < N; i++) {
			input[i] = sc.nextInt();
		}
		
		// 3. combi 실행.
		combi(0,0,0);
		System.out.println(maxSumUnderM);
	}
	
	/**
	 * @param depth   	뽑은 수를 저장할 index 위치
	 * @param start 	뽑을 수의 index 위치
	 * @param sum		현재까지 선택한 카드의 합 
	 */

	// 2. 3개의 수를 뽑을 combi 함수 만들기
	static void combi(int depth, int start, int sum) {
		if (sum > M) return;
		if (depth==3) {			// 카드 3장 선택 완료
			if (maxSumUnderM <= M) {		// M을 넘지 않는 경우만 고려
				maxSumUnderM = Math.max(maxSumUnderM, sum);
			}
			return;
		}
		
		for (int i = start; i < N; i++) {
			combi(depth+1, i+1, sum + input[i]);
		}
		
	}

}
