package algo_250213;

import java.util.Scanner;

public class Main_2753_윤년_이은채 {
	/*
	 * 연도가 주어졌을 때, 윤년이면 1, 아니면 0을 출력하는 프로그램을 작성하시오.
	 * 윤년: 연도가 4의 배수이면서, 100의 배수가 아닐 때 또는 400의 배수일 때이다.
	 * 
	 * 1. 입력받기
	 * 2. 윤년검사
	 * 2.1 윤년이라면 1
	 * 2.2 윤년이 아니라면 0
	 * 
	 * */
	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Scanner sc = new Scanner(System.in);
		int a = sc.nextInt();
		sc.close();
		
		
		if ((a % 4 == 0 && a % 100 != 0) || a % 400 == 0) {
			System.out.println(1);
		} else {
			System.out.println(0);
		}
	}

}
