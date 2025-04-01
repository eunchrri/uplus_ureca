package algo_250331;

import java.util.Scanner;

public class Main_boj_31403_ApBmC_이은채 {
	/*
	 * JavaScript에서 +, -은 수에 대해서는 일반적인 의미의 덧셈 뺄셈의 의미를 가지고 있다.
	 * 하지만 문자열에 대해서 +는 두 문자열을 이어붙이라는 의미이고, 
	 * -는 양쪽 문자열을 수로 해석한 이후에 빼라는 의미이다.
	 * 
	 * 입력으로 각 줄에 A, B, C가 주어진다.
	 * 출력으로 첫 줄에는 A, B, C를 수로 생각했을 때, A + B - C
	 *       둘째 줄에는 A, B, C를 문자열로 생각했을 때, A + B - C 를 출력하자.
	 * 
	 * */
	public static void main(String[] args) {
		// 1. 각 수 입력 받기
		Scanner sc = new Scanner(System.in);
		int A = sc.nextInt();
		int B = sc.nextInt();
		int C = sc.nextInt();
		sc.close();
		
		// 2. 수로 생각했을 때 => result1
		int result1 = 0;		
		result1 = A + B - C;
		System.out.println(result1);
		
		// 3. 문자열로 생각했을 때 => result2
		String strAB = String.valueOf(A) + String.valueOf(B);
		int intAB = Integer.parseInt(strAB); // -는 문자열을 숫자로 인식한 이후에 빼야하므로 숫자로 변환
		int result2 = intAB - C;
		System.out.println(result2);
	}
}
