package algo_250220;

import java.util.Scanner;

public class Main_boj_10872_팩토리얼_이은채 {

	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		int N = sc.nextInt();
		sc.close();
		int mul = 1;
		for (int i = 1; i < N+1; i++) {
			mul *= i;
		}
		System.out.println(mul);

	}

}
