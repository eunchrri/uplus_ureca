package algo_250331;

import java.util.Scanner;

public class Main_boj_15964_이상한_기호_이은채 {
	/*
	 * A @ B = (A + B)*(A - B)
	 * A, B가 주어지면 A @ B 계산하는 프로그램 만들기
	 * */
	public static void main(String[] args) {
		// 1. A, B를 입력받는다.
		Scanner sc = new Scanner(System.in);
		int A = sc.nextInt();
		int B = sc.nextInt();
		
		long result = (long)(A + B)*(A - B);		// int로 하면 오버플로가 생길 수 있기 때문에 곱셈 이전에 long 캐스팅을 해줘야한다.
		System.out.println(result);
		
	}
}
