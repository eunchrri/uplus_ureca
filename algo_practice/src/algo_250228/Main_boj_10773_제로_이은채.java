package algo_250228;

import java.util.Iterator;
import java.util.Scanner;
import java.util.Stack;

public class Main_boj_10773_제로_이은채 {
	/*
	 * 재현이가 부른 돈을 재민이가 받아적는 상황
	 * 재현이가 돈을 실수로 잘못 부를때마다 0을 외쳐서 가장 최근에 재민이가 쓴 수를 지우게 시킨다.
	 * 재민이는 이렇게 모든 수를 받아 적은 후 그 수의 합을 알고 싶어한다. 재민이를 도와주자!
	 * 
	 * 입:
	 * 	첫: 정수 k <=100,000
	 * 	이후 k 개의 줄에 정수가 1개씩 주어짐. <= 1,000,000
	 * 	정수가 0일 경우에는 가장 최근에 쓴 수를 지우고, 아닐 경우 해당 수를 쓴다.
	 * 	정수가 0일 경우에는 지울 수 있는 수가 있음을 보장할 수 있다.
	 * 
	 * 출: 재민이가 최종적으로 적어 낸 수의 합을 출력한다. (합은 2^31 -1 보다 작거나 같은 정수)
	 * */
	
	public static void main(String[] args) {
		// 1. k 를 입력받는다.
		Scanner sc = new Scanner(System.in);
		int k = sc.nextInt();
		
		// 2. k 개의 수를 stack 에 저장한다.
		// 2.1. 수를 저장할 stack 배열을 생성한다.
		Stack<Integer> stack = new Stack<>();
		
		// 2.2. k 개의 수를 차례대로 입력한다.
		for (int i = 0; i < k; i++) {
			int m = sc.nextInt();
			// 2.2. 입력값에 0이 있으면 가장 마지막에 넣은 수를 뺀다. (pop)
			if (m == 0) {
				stack.pop();
			} else stack.push(m);
		}
		
		// 3. 스택의 있는 수를 모두 더한 후 출력한다.
		int sum = 0;
		for (Integer num : stack) {
			sum += num;
		}
		
		System.out.println(sum);
	}
}
